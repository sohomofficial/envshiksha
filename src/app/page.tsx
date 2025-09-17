import Feature from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Modules from "@/components/landing/modules";
import { Nav } from "@/components/landing/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="space-y-32 py-32">
        <Hero />
        <Feature />
        <Modules />
      </main>
    </>
  );
}
