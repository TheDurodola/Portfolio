import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  const stats = [
    ["APIs", "stable contracts and practical service boundaries"],
    ["Cloud", "deployment awareness and production readiness"],
    ["Data", "reliable storage, queries, and performance"],
  ] as const;

  return (
    <section className="grid flex-1 items-start gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
      <div className="max-w-3xl">
        <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
          I design reliable backend systems for products that need to scale
          without drama.
        </h1>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            variant="outline"
            className="border-border/80 bg-transparent text-foreground hover:bg-muted"
          >
            Download resume
          </Button>
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          I focus on APIs, service architecture, data flow, and pragmatic cloud
          delivery. My work is built for teams that care about maintainability,
          observability, and shipping real value.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map(([label, detail]) => (
            <div
              key={label}
              className="rounded-none border border-border/70 bg-card/60 p-4 backdrop-blur"
            >
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8b1e3f]">
                {label}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid h-full gap-6 self-stretch">
        <Card className="h-full border-border/70 bg-card/80 shadow-2xl shadow-black/20 backdrop-blur">
          <CardContent className="pt-6">
            <div className="flex h-full min-h-136 items-center justify-center border border-border/70 bg-background p-6 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#8b1e3f]">
                  Photo placeholder
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Replace this block with your portrait image.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
