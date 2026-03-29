import { z } from "zod";

export const inlineSegmentSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("text"), content: z.string() }),
  z.object({ type: z.literal("strong"), content: z.string() }),
  z.object({
    type: z.literal("link"),
    label: z.string(),
    href: z.string(),
  }),
]);

export const paragraphBlockSchema = z.union([
  z.string(),
  z.object({ segments: z.array(inlineSegmentSchema) }),
]);

export const listBulletSchema = z.union([
  z.string(),
  z.object({
    segments: z.array(inlineSegmentSchema),
    subitems: z.array(z.string()).optional(),
  }),
]);

export const legalSectionSchema = z.object({
  heading: z.string().optional(),
  paragraphs: z.array(paragraphBlockSchema).optional(),
  bullets: z.array(listBulletSchema).optional(),
});

export const legalPageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  sections: z.array(legalSectionSchema),
});

export type InlineSegment = z.infer<typeof inlineSegmentSchema>;
export type ParagraphBlock = z.infer<typeof paragraphBlockSchema>;
export type ListBullet = z.infer<typeof listBulletSchema>;
export type LegalSection = z.infer<typeof legalSectionSchema>;
export type LegalPage = z.infer<typeof legalPageSchema>;
