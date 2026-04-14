import type { ReactNode } from "react";
import Link from "next/link";
import { Music } from "lucide-react";

export function LegalPageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border/50 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-foreground transition-opacity hover:opacity-90"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary-fill to-accent shadow-sm">
              <Music className="h-5 w-5 text-primary-fill-foreground" />
            </span>
            <span>
              Akaal{" "}
              <span className="text-primary">Creation</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="mb-8 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {children}
      </main>
    </div>
  );
}
