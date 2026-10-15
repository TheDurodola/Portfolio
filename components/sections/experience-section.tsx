import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = [
  "Backend engineering with a focus on service design, stable APIs, and operational clarity.",
  "Cloud interest across deployment pipelines, infrastructure choices, and production readiness.",
  "Comfortable working across the stack when it improves delivery, but happiest near the server and data plane.",
] as const;

export default function ExperienceSection() {
  return (
    <section className="pb-16">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Experience snapshot
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          The themes that guide how I build and communicate.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {experience.map((item, index) => (
          <Card key={item} className="border-border/70 bg-card/70">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-xl">{`0${index + 1}`}</CardTitle>
                <span className="h-2.5 w-2.5 rounded-none bg-[#8b1e3f]" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{item}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
