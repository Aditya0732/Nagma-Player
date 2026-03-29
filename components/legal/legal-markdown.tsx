import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

const components: Components = {
  h2: ({ children, ...props }) => (
    <h2
      className="mb-3 mt-10 text-lg font-semibold text-foreground first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mb-2 mt-6 text-base font-semibold text-foreground" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="leading-relaxed text-muted-foreground" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal space-y-1.5 pl-5 text-muted-foreground" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed [&_ul]:mt-2 [&_ul]:list-[circle]" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-primary underline underline-offset-2 hover:text-primary/90"
      {...props}
    >
      {children}
    </a>
  ),
};

export function LegalMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="legal-markdown space-y-4 text-sm sm:text-[0.9375rem]">
      <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
    </div>
  );
}
