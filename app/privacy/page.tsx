import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document-body";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { getLegalDocument } from "@/lib/get-legal-document";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getLegalDocument("privacy");
  return {
    title: doc.meta.title,
    description: doc.meta.description,
  };
}

export default async function PrivacyPage() {
  const doc = await getLegalDocument("privacy");
  return (
    <LegalPageShell title={doc.meta.title}>
      <LegalDocumentBody sections={doc.sections} />
    </LegalPageShell>
  );
}
