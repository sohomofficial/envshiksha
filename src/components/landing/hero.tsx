import { IconBrandNextjs } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance lg:text-5xl">
              Learn, Act, and Save Our Planet
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-3xl leading-7 lg:text-xl">
              Join thousands of students on an interactive journey to understand environmental
              challenges and become eco-warriors through gamified learning experiences.
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <Button className="shadow-sm transition-shadow hover:shadow">Get Started</Button>
            <Button variant="outline" className="group">
              Learn more{" "}
              <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
          <div className="mt-20 flex flex-col items-center gap-5">
            <p className="text-muted-foreground leading-7 font-normal lg:text-left">
              Built with Open Source Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "group flex aspect-square h-12 items-center justify-center p-0"
                )}
              >
                <IconBrandNextjs />
              </Link>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "group flex aspect-square h-12 items-center justify-center p-0"
                )}
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg"
                  alt="TypeScript logo"
                  className="h-6 saturate-0 transition-all group-hover:saturate-150"
                />
              </Link>

              <a
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "group flex aspect-square h-12 items-center justify-center p-0"
                )}
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg"
                  alt="React logo"
                  className="h-6 saturate-0 transition-all group-hover:saturate-150"
                />
              </a>
              <a
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "group flex aspect-square h-12 items-center justify-center p-0"
                )}
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg"
                  alt="Tailwind CSS logo"
                  className="h-6 saturate-0 transition-all group-hover:saturate-150"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
