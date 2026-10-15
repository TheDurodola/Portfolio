import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    name: "Platform API",
    summary:
      "A backend service designed for predictable request handling, clean contracts, and long-term maintainability.",
    tags: ["APIs", "Auth", "Testing"],
  },
  {
    name: "Cloud deployment pipeline",
    summary:
      "A delivery workflow for shipping backend releases with safer rollouts and clearer operational visibility.",
    tags: ["CI/CD", "Cloud", "Observability"],
  },
  {
    name: "Data-heavy service layer",
    summary:
      "A service layer optimized around database access patterns, throughput, and dependable system behavior.",
    tags: ["Postgres", "Caching", "Performance"],
  },
] as const;

export default function ProjectsSection() {
  return (
    <section className="pb-16">
      <div className="mb-6">
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          PROJECTS
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          A few examples of the kind of backend and cloud-oriented work I enjoy
          shipping.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.name} className="border-border/70 bg-card/70">
            <CardHeader>
              <CardTitle className="text-xl">{project.name}</CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-none border border-border/70 bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
