import { z } from "zod";

/**
 * Legal page copy from `content/{slug}.json`.
 * Provide exactly one of:
 * - `body` — full page markdown inline in JSON
 * - `bodySections` — markdown chunks joined with blank lines
 * - `bodyFile` — path relative to `content/` (e.g. `legal/privacy.md`)
 */
export const legalPageContentSchema = z
  .object({
    pageTitle: z.string().min(1),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    body: z.string().optional(),
    bodySections: z.array(z.string()).optional(),
    bodyFile: z.string().min(1).optional(),
  })
  .superRefine((data, ctx) => {
    const hasBody = Boolean(data.body?.trim());
    const hasSections = Boolean(data.bodySections?.length);
    const hasFile = Boolean(data.bodyFile?.trim());
    const n = [hasBody, hasSections, hasFile].filter(Boolean).length;
    if (n !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Provide exactly one of: body (string), bodySections (array), or bodyFile (path under content/).",
      });
    }
  });

export type LegalPageContent = z.infer<typeof legalPageContentSchema>;

export function joinLegalMarkdown(doc: LegalPageContent): string {
  if (doc.body?.trim()) return doc.body.trim();
  return (doc.bodySections ?? []).join("\n\n");
}
