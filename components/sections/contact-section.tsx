import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="pb-16">
      <div className="mb-6">
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Contact me
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Send a message if you need backend engineering support, cloud help,
          or a reliable problem solver.
        </p>
      </div>

      <Card className="border-border/70 bg-card/70">
        <CardContent className="p-6 sm:p-8">
          <form
            className="grid gap-5"
            action="mailto:hello@example.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-foreground">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[#8b1e3f]"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-foreground">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[#8b1e3f]"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-foreground">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about the project, role, or problem you want help with."
                className="border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[#8b1e3f]"
              />
            </label>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#8b1e3f] text-white hover:bg-[#6f1730]"
              >
                Send message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
