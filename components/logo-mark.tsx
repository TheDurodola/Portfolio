import Link from "next/link";

export default function LogoMark() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="inline-flex items-center justify-center border border-border/70 bg-background px-4 py-2 text-sm font-semibold tracking-[0.35em] text-foreground transition-colors hover:bg-muted"
    >
      DAT
    </Link>
  );
}
