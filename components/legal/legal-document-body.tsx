import { Fragment, type ReactNode } from "react";
import type {
  InlineSegment,
  LegalSection,
  ListBullet,
  ParagraphBlock,
} from "@/lib/legal-document-schema";

const linkClass =
  "text-primary underline underline-offset-2 hover:text-primary/90";

function renderSegments(segments: InlineSegment[]): ReactNode {
  return segments.map((seg, i) => {
    const key = i;
    switch (seg.type) {
      case "text":
        return <Fragment key={key}>{seg.content}</Fragment>;
      case "strong":
        return <strong key={key}>{seg.content}</strong>;
      case "link":
        return (
          <a key={key} href={seg.href} className={linkClass}>
            {seg.label}
          </a>
        );
    }
  });
}

function ParagraphBlockView({ block }: { block: ParagraphBlock }) {
  if (typeof block === "string") {
    return <p>{block}</p>;
  }
  return <p>{renderSegments(block.segments)}</p>;
}

function ListBulletView({ bullet }: { bullet: ListBullet }) {
  if (typeof bullet === "string") {
    return <li>{bullet}</li>;
  }
  return (
    <li>
      {renderSegments(bullet.segments)}
      {bullet.subitems && bullet.subitems.length > 0 ? (
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {bullet.subitems.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function LegalDocumentBody({ sections }: { sections: LegalSection[] }) {
  return (
    <>
      {sections.map((section, sIdx) => (
        <Fragment key={sIdx}>
          {section.heading ? <h2>{section.heading}</h2> : null}
          {section.paragraphs?.map((p, pIdx) => (
            <ParagraphBlockView key={pIdx} block={p} />
          ))}
          {section.bullets && section.bullets.length > 0 ? (
            <ul>
              {section.bullets.map((b, bIdx) => (
                <ListBulletView key={bIdx} bullet={b} />
              ))}
            </ul>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
