"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code2, DatabaseZap, GitBranch, Package, ServerCog, TerminalSquare, Workflow } from "lucide-react";
import { motion } from "motion/react";

const tools = [
  {
    name: "TypeScript",
    description: "Typed application and service code.",
    icon: Code2,
  },
  {
    name: "Node.js",
    description: "Server-side runtime for APIs and tooling.",
    icon: TerminalSquare,
  },
  {
    name: "PostgreSQL",
    description: "Relational data modeling and query work.",
    icon: DatabaseZap,
  },
  {
    name: "Docker",
    description: "Containerized local and deployment workflows.",
    icon: Package,
  },
  {
    name: "Git",
    description: "Version control and collaborative delivery.",
    icon: GitBranch,
  },
  {
    name: "CI/CD",
    description: "Automated build, test, and release pipelines.",
    icon: Workflow,
  },
  {
    name: "Cloud",
    description: "Infrastructure, hosting, and deployment decisions.",
    icon: Cloud,
  },
  {
    name: "Backend services",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
] as const;

const featuredTools = tools.slice(0, 4);
const remainingTools = tools.slice(4);

const row1Tools = [...featuredTools, ...featuredTools, ...featuredTools];
const row2Tools = [...remainingTools, ...remainingTools, ...remainingTools];
const row3Tools = [...tools, ...tools];

function ToolCard({ name, description, Icon }: { name: string; description: string; Icon: typeof Code2 }) {
  return (
    <Card className="w-80 shrink-0 border-border/70 bg-card/70 sm:w-96">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-xl">{name}</CardTitle>
          <Icon className="h-5 w-5 text-[#8b1e3f]" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function ToolsSection() {
  return (
    <section className="w-full pb-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Tools
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Tools I use to ship work
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          A compact view of the tools that show up most often in my workflow.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-6 w-full overflow-hidden">
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...row1Tools, ...row1Tools].map((tool, index) => (
              <ToolCard
                key={`${tool.name}-${index}`}
                name={tool.name}
                description={tool.description}
                Icon={tool.icon}
              />
            ))}
          </motion.div>
        </div>

        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...row2Tools, ...row2Tools].map((tool, index) => (
              <ToolCard
                key={`${tool.name}-${index}`}
                name={tool.name}
                description={tool.description}
                Icon={tool.icon}
              />
            ))}
          </motion.div>
        </div>

        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...row3Tools, ...row3Tools].map((tool, index) => (
              <ToolCard
                key={`${tool.name}-extra-${index}`}
                name={tool.name}
                description={tool.description}
                Icon={tool.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
