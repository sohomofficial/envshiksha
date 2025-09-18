import * as React from "react";
import { cn } from "@/lib/utils";

// Improved type definitions with readonly properties
interface Feature {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly width?: "small" | "large";
}

interface ModulesProps {
  readonly heading?: string;
  readonly description?: string;
  readonly features: readonly Feature[];
}

interface FeatureCardProps {
  readonly feature: Feature;
  readonly className?: string;
}

// Memoized FeatureCard component
const FeatureCard = React.memo(function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-10 transition-colors",
        feature.width === "large" ? "lg:w-3/5" : "lg:w-2/5",
        className
      )}
    >
      <h2 className="text-xl font-semibold tracking-tight">{feature.title}</h2>
      <p className="text-muted-foreground mt-2">{feature.description}</p>
      <div className="relative mt-8 overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className={cn(
            "h-full w-full object-cover transition-transform hover:scale-105",
            feature.width === "large" ? "aspect-[1.5] lg:aspect-[2.4]" : "aspect-[1.45]"
          )}
          loading="lazy"
        />
      </div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

// Default values for features
const DEFAULT_FEATURES: readonly Feature[] = [
  {
    title: "Climate Change",
    description:
      "Discover how rising temperatures, melting ice, and extreme weather shape our world. Through interactive simulations and real-life examples, learn the science behind climate change and explore solutions to protect our planet.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    width: "large",
  },
  {
    title: "Waste Management",
    description:
      "Learn the importance of reducing, reusing, and recycling through fun mini-games and activities. Understand how proper waste management helps keep our environment clean and sustainable.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    width: "small",
  },
  {
    title: "Water Conservation",
    description:
      "Discover smart ways to save every drop through interactive tools and challenges. Track water usage, explore conservation techniques, and learn how small actions can make a big difference.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    width: "small",
  },
  {
    title: "Renewable Energy",
    description:
      "Explore the power of the sun, wind, and other clean sources through interactive simulations. Learn how renewable energy works and why it is key to building a sustainable future.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    width: "large",
  },
];

export default function Modules({
  heading = "Hands-On Learning Modules",
  description = "Explore key environmental topics through interactive lessons, engaging challenges, and real-world activities.",
  features = DEFAULT_FEATURES,
}: ModulesProps) {
  // Memoized feature pairs calculation
  const featurePairs = React.useMemo(
    () =>
      Array.from({ length: Math.ceil(features.length / 2) }, (_, i) => [
        features[i * 2],
        features[i * 2 + 1],
      ]),
    [features]
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">{heading}</h1>
          {description && (
            <p className="text-muted-foreground text-center text-lg font-medium md:max-w-4xl lg:text-xl">
              {description}
            </p>
          )}
        </div>

        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            {featurePairs.map(([first, second], index) => (
              <div
                key={first.title}
                className={cn(
                  "relative flex flex-col lg:flex-row",
                  index !== 0 && "border-muted2 border-t border-solid"
                )}
              >
                <FeatureCard
                  feature={first}
                  className="border-muted2 border-b border-solid lg:border-r lg:border-b-0"
                />
                {second && <FeatureCard feature={second} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
