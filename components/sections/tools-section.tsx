"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code2, DatabaseZap, GitBranch, Package, ServerCog, TerminalSquare, Workflow } from "lucide-react";
import { motion } from "motion/react";

const tools = [
  {
    name: "Golang",
    description: "Typed application and service code.",
    icon: Code2,
  },
  {
    name: "Java",
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
  {
    name: "MongoDB",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
  {
    name: "Supabase",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
  {
    name: "Monolith",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
  {
    name: "Microservices",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
  {
    name: "Cloudinary",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
  {
    name: "AWS",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
  {
    name: "RabbitMQ",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
  {
    name: "Springboot",
    description: "Designing maintainable service boundaries.",
    icon: ServerCog,
  },
  {
    name: "Gin-Gonic",
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
    <Card className="group w-80 shrink-0 border-2 border-[#E5E5E5] bg-[#FAFAFA] p-6 hover:border-[#0A0A0A] transition-colors sm:w-96 shadow-none">
      <CardHeader className="p-0 pb-3">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="font-heading text-lg sm:text-xl font-normal text-[#0A0A0A]">
            {name}
          </CardTitle>
          <div className="border border-[#0A0A0A] p-1.5 transition-colors group-hover:bg-[#0A0A0A] group-hover:text-[#FAFAFA]">
            <Icon className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <p className="font-sans text-sm leading-6 text-[#525252]">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function ToolsSection() {
  return (
    <section className="w-full pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 mb-8 border-b-2 border-[#0A0A0A] pb-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#525252]">
          <span className="h-2 w-2 bg-[#EF4444]" />
          <span>SECTION // 03</span>
        </div>
        <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[#0A0A0A]">
          TOOLS
        </h2>
        <p className="mt-2 max-w-2xl font-sans text-base leading-7 text-[#525252]">
          A compact view of the tools that show up most often in my workflow.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full overflow-hidden">
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-6"
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
            className="flex w-max gap-6"
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
            className="flex w-max gap-6"
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
