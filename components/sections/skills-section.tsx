import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, DatabaseZap, ServerCog } from "lucide-react";

const skills = [
  {
    title: "Backend systems",
    description:
      "API design, service boundaries, authentication, and maintainable architecture for production services.",
    icon: ServerCog,
  },
  {
    title: "Cloud engineering",
    description:
      "Deployments, infrastructure thinking, observability, and reliable workflows for cloud-hosted systems.",
    icon: Cloud,
  },
  {
    title: "Data and reliability",
    description:
      "Schema design, query performance, caching, and safety-focused delivery for systems that need to last.",
    icon: DatabaseZap,
  },
] as const;

export default function SkillsSection() {
  return (
    <section className="grid gap-6 py-16 lg:grid-cols-3">
      {skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <Card key={skill.title} className="border-border/70 bg-card/70">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-xl">{skill.title}</CardTitle>
                <Icon className="h-5 w-5 text-[#8b1e3f]" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {skill.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
