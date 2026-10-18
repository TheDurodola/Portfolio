"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Cloud, Code2, DatabaseZap, GitBranch, Package, ServerCog, TerminalSquare, Workflow } from "lucide-react";
import { motion } from "motion/react";

import {
  LucideIcon,
  Code2,
  TerminalSquare,
  DatabaseZap,
  Package,
  GitBranch,
  Workflow,
  Cloud,
  ServerCog,
  Database,
  Box,
  Network,
  Image as ImageIcon,
  MessageSquare,
  Zap,
  Layout,
  ShieldCheck,
  Brain,
  Users,
  Wrench,
  FileCode2,
  Globe,
  Server,
  CheckCircle,
  Lightbulb,
  Shield,
  Layers,
  Settings,
  Activity,
} from "lucide-react";

export type SkillCategory =
  | "Language"
  | "Framework & Library"
  | "Database & Storage"
  | "DevOps & Infrastructure"
  | "Architecture & Practices"
  | "Soft Skill"
  | "Interest";

export interface Tool {
  name: string;
  description: string;
  icon: LucideIcon;
  category: SkillCategory;
}

export const tools: readonly Tool[] = [
  // Languages
  {
    name: "Java",
    description: "Primary object-oriented runtime for enterprise APIs.",
    icon: TerminalSquare,
    category: "Language",
  },
  {
    name: "Golang",
    description: "High-performance, typed systems and service code.",
    icon: Code2,
    category: "Language",
  },
  {
    name: "TypeScript",
    description: "Strictly typed JavaScript for robust Next.js frontends.",
    icon: FileCode2,
    category: "Language",
  },
  {
    name: "Python",
    description: "Versatile language for scripting and backend services.",
    icon: FileCode2,
    category: "Language",
  },
  {
    name: "JavaScript",
    description: "Core web programming language.",
    icon: FileCode2,
    category: "Language",
  },
  {
    name: "HTML/CSS",
    description: "Foundational web structure and styling.",
    icon: Layout,
    category: "Language",
  },
  {
    name: "SQL",
    description: "Structured query language for relational data.",
    icon: DatabaseZap,
    category: "Language",
  },

  // Frameworks & Libraries
  {
    name: "Spring Boot",
    description: "Comprehensive Java framework for enterprise microservices.",
    icon: Server,
    category: "Framework & Library",
  },
  {
    name: "Gin-Gonic",
    description: "High-performance HTTP web framework written in Go.",
    icon: Zap,
    category: "Framework & Library",
  },
  {
    name: "Django",
    description: "High-level Python web framework.",
    icon: Box,
    category: "Framework & Library",
  },
  {
    name: "Next.js",
    description:
      "Full-stack React framework optimized for seamless API routing and server components.",
    icon: Layers,
    category: "Framework & Library",
  },
  {
    name: "React.js",
    description: "Component-based UI library.",
    icon: Layout,
    category: "Framework & Library",
  },
  {
    name: "Flask & FastAPI",
    description: "Lightweight and high-performance Python API frameworks.",
    icon: Zap,
    category: "Framework & Library",
  },
  {
    name: "Spring JPA & Security",
    description: "Java data persistence and robust authentication.",
    icon: ShieldCheck,
    category: "Framework & Library",
  },

  // Databases & Storage
  {
    name: "PostgreSQL",
    description: "Advanced open-source relational database.",
    icon: DatabaseZap,
    category: "Database & Storage",
  },
  {
    name: "MySQL",
    description: "Reliable relational database management system.",
    icon: Database,
    category: "Database & Storage",
  },
  {
    name: "MongoDB",
    description: "NoSQL document database for flexible data schemas.",
    icon: Database,
    category: "Database & Storage",
  },
  {
    name: "Supabase",
    description: "Open source Firebase alternative with Postgres.",
    icon: DatabaseZap,
    category: "Database & Storage",
  },

  // DevOps & Infrastructure
  {
    name: "Docker",
    description: "Containerized local and deployment workflows.",
    icon: Package,
    category: "DevOps & Infrastructure",
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaborative delivery.",
    icon: GitBranch,
    category: "DevOps & Infrastructure",
  },
  {
    name: "CI/CD",
    description: "Automated build, test, and release pipelines.",
    icon: Workflow,
    category: "DevOps & Infrastructure",
  },
  {
    name: "AWS",
    description: "Comprehensive cloud computing web services.",
    icon: Cloud,
    category: "DevOps & Infrastructure",
  },
  {
    name: "Linux",
    description: "Core operating system environment for server hosting.",
    icon: TerminalSquare,
    category: "DevOps & Infrastructure",
  },
  {
    name: "Nginx",
    description: "High-performance web server and reverse proxy.",
    icon: Globe,
    category: "DevOps & Infrastructure",
  },
  {
    name: "RabbitMQ",
    description: "Robust open-source message-broker software.",
    icon: MessageSquare,
    category: "DevOps & Infrastructure",
  },
  {
    name: "Cloudinary",
    description: "Cloud-based image and video management API.",
    icon: ImageIcon,
    category: "DevOps & Infrastructure",
  },

  // Architecture & Practices (System Design Focus)
  {
    name: "System Design",
    description:
      "Architecting scalable and highly available distributed systems.",
    icon: Layers,
    category: "Architecture & Practices",
  },
  {
    name: "Microservices",
    description: "Decoupled, independently deployable service architecture.",
    icon: Network,
    category: "Architecture & Practices",
  },
  {
    name: "Monolith Architecture",
    description: "Unified, single-tier software application design.",
    icon: Box,
    category: "Architecture & Practices",
  },
  {
    name: "N-tier Architecture",
    description: "Logical structuring of applications into distinct tiers.",
    icon: Layers,
    category: "Architecture & Practices",
  },
  {
    name: "RESTful APIs & gRPC",
    description: "Designing maintainable service boundaries and remote calls.",
    icon: ServerCog,
    category: "Architecture & Practices",
  },
  {
    name: "Auth (JWT & Session)",
    description: "Secure stateless and stateful user authentication.",
    icon: Shield,
    category: "Architecture & Practices",
  },
  {
    name: "SOLID & Clean Code",
    description: "Principles for maintainable and readable software design.",
    icon: CheckCircle,
    category: "Architecture & Practices",
  },
  {
    name: "TDD & Testing",
    description: "Unit, Integration, and Mockito testing methodologies.",
    icon: Activity,
    category: "Architecture & Practices",
  },

  // Soft Skills
  {
    name: "Problem-Solving & Troubleshooting",
    description: "Identifying root causes and engineering resilient solutions.",
    icon: Wrench,
    category: "Soft Skill",
  },
  {
    name: "Design & Industrial Thinking",
    description:
      "Approaching problems with scale, business, and user experience in mind.",
    icon: Brain,
    category: "Soft Skill",
  },
  {
    name: "Leadership & Teamwork",
    description:
      "Mentoring peers and collaborating across technical disciplines.",
    icon: Users,
    category: "Soft Skill",
  },
  {
    name: "Learning & Development",
    description: "Continuous adaptation to new technologies and paradigms.",
    icon: Lightbulb,
    category: "Soft Skill",
  },

  // Interests
  {
    name: "Data Structures & Leetcode",
    description: "Algorithmic optimization and competitive programming.",
    icon: Code2,
    category: "Interest",
  },
  {
    name: "Open Source Contribution",
    description: "Collaborating on global, community-driven codebases.",
    icon: Globe,
    category: "Interest",
  },
] as const;

const featuredTools = tools.slice(0, 4);
const remainingTools = tools.slice(4);

const row1Tools = [...featuredTools, ...featuredTools, ...featuredTools];
const row2Tools = [...remainingTools, ...remainingTools, ...remainingTools];
const row3Tools = [...tools, ...tools];

function ToolCard({
  name,
  description,
  Icon,
}: {
  name: string;
  description: string;
  Icon: typeof Code2;
}) {
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
        <p className="font-sans text-sm leading-6 text-[#525252]">
          {description}
        </p>
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
              duration: 30,
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
              duration: 200,
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
              duration: 200,
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
