import { Trees } from "lucide-react";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}
const currYear=new Date().getFullYear();

export default function Footer({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "Empowering students to become environmental stewards through gamified learning.",
  menuItems = [
    {
      title: "Platform",
      links: [
        { text: "Dashboard", url: "#" },
        { text: "Modules", url: "#" },
        { text: "Challanges", url: "#" },
        { text: "Leaderboard", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", url: "#" },
        { text: "Contact Us", url: "#" },
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Terms of Service", url: "/terms" },
      ],
    },
    {
      title: "Language",
      links: [
        { text: "English", url: "#" },
        { text: "हिंदी", url: "#" },
      ],
    },
  ],
  copyright = `© ${currYear} EnvShiksha. All rights reserved. Built with 💚 for our planet.`,
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Trees />
                Envshiksha
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                  {section.title === "Language" ? (
                    <ul className="flex gap-4">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <a
                            href={link.url}
                            className="px-4 py-1 border rounded-lg font-medium hover:bg-secondary transition"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                  <ul className="text-muted-foreground space-y-4">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-primary font-medium">
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 border-t pt-8 text-sm font-medium">
            <p className="text-center">{copyright}</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
