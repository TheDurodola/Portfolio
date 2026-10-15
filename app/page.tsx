import { Separator } from "@/components/ui/separator";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ToolsSection from "@/components/sections/tools-section";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pt-8 sm:px-10 lg:px-12">
        <SiteHeader />
        <HeroSection />
        <Separator className="bg-border/80" />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>

      <ToolsSection />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-8 sm:px-10 lg:px-12">
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  );
}
