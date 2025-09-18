import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h1 className="scroll-m-20 text-center text-5xl font-medium tracking-tight text-balance lg:text-8xl">
              Learn, Act, and Save Our Planet
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-3xl leading-7 lg:text-xl">
              Join thousands of students on an interactive journey to understand environmental
              challenges and become eco-warriors through gamified learning experiences.
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">
                Learn more
                <ExternalLink className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="mt-20 flex flex-col items-center gap-5">
            <p className="text-muted-foreground leading-7 font-normal lg:text-left">
              Built with Open Source Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
