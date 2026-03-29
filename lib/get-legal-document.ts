import fs from "node:fs/promises";
import path from "node:path";
import {
  legalPageSchema,
  type LegalPage,
} from "@/lib/legal-document-schema";

export type LegalDocumentSlug = "privacy" | "terms";

const defaultLegalDir = path.join(process.cwd(), "content", "legal");

function legalDocumentsDir(): string {
  return process.env.LEGAL_CONTENT_DIR?.trim() || defaultLegalDir;
}

const FALLBACK: Record<LegalDocumentSlug, LegalPage> = {
  privacy: {
    meta: {
      title: "Privacy Policy | Nagma Player",
      description:
        "How Nagma Player collects, uses, stores, and protects information when you use our app and services.",
    },
    sections: [
      {
        paragraphs: [
          "This page could not be loaded. Please try again later or contact support.",
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: "Terms of Service | Nagma Player",
      description:
        "Terms of Service for the Nagma Player mobile application and related services.",
    },
    sections: [
      {
        paragraphs: [
          "This page could not be loaded. Please try again later or contact support.",
        ],
      },
    ],
  },
};

export async function getLegalDocument(
  slug: LegalDocumentSlug
): Promise<LegalPage> {
  const dir = legalDocumentsDir();
  const filePath = path.join(dir, `${slug}.json`);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    const validated = legalPageSchema.safeParse(parsed);
    if (validated.success) {
      return validated.data;
    }
    console.error(`Invalid legal document JSON (${slug}):`, validated.error.flatten());
    return FALLBACK[slug];
  } catch (error) {
    console.error(`Unable to load legal document (${slug}).`, error);
    return FALLBACK[slug];
  }
}
