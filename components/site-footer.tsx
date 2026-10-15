import { Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="flex flex-col gap-4 border-t border-border/70 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        Available for backend-focused work, cloud builds, and product-minded engineering.
      </p>
      <a
        href="mailto:hello@example.com"
        className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-[#8b1e3f]"
      >
        <Mail className="h-4 w-4" />
        hello@example.com
      </a>
    </footer>
  );
}
