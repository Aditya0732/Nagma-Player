import fs from "node:fs/promises";
import path from "node:path";
import {
  joinLegalMarkdown,
  legalPageContentSchema,
  type LegalPageContent,
} from "@/lib/legal-content-schema";

export type LegalPageSlug = "privacy" | "terms";

const CONTENT_DIR =
  process.env.LEGAL_CONTENT_DIR || path.join(process.cwd(), "content");

export async function getLegalPage(slug: LegalPageSlug): Promise<{
  doc: LegalPageContent;
  markdown: string;
}> {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`);
  const raw = await fs.readFile(filePath, "utf-8");
  const parsed = JSON.parse(raw) as unknown;
  const validated = legalPageContentSchema.safeParse(parsed);
  if (!validated.success) {
    console.error(`Invalid legal JSON (${slug}):`, validated.error.flatten());
    throw new Error(`Invalid legal page content: ${slug}`);
  }
  const doc = validated.data as LegalPageContent;

  const markdown = doc.bodyFile?.trim()
    ? (
        await fs.readFile(
          path.join(CONTENT_DIR, doc.bodyFile.trim()),
          "utf-8"
        )
      ).trim()
    : joinLegalMarkdown(doc);

  return { doc, markdown };
}
