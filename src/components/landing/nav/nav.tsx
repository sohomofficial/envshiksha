import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  BarChartBig,
  Book,
  Droplets,
  Earth,
  HelpingHand,
  Leaf,
  PhoneCall,
  Recycle,
  Trees,
} from "lucide-react";
import Link from "next/link";
import ThemeToggleButton from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MobileNav from "./mobile-nav";
import SubMenuLink from "./sub-menu-link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export const menu: MenuItem[] = [
  { title: "Features", url: "#" },
  {
    title: "Modules",
    url: "#",
    items: [
      {
        title: "Climate Change",
        description: "Understanding global warming, greenhouse effects, and climate solutions",
        icon: <Earth className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Waste Management",
        description: "Learn about recycling, composting, and sustainable waste practices",
        icon: <Recycle className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Water Conservation",
        description: "Discover water cycle, pollution prevention, and conservation methods",
        icon: <Droplets className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Biodiversity",
        description: "Explore ecosystems, species protection, and habitat conservation",
        icon: <Leaf className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    url: "#",
    items: [
      {
        title: "Help Center",
        description: "Get all the answers you need right here",
        icon: <HelpingHand className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Contact Us",
        description: "We are here to help you with any questions you have",
        icon: <PhoneCall className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Status",
        description: "Check the current status of our services and APIs",
        icon: <BarChartBig className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Terms of Service",
        description: "Our terms and conditions for using our services",
        icon: <Book className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  {
    title: "Blog",
    url: "#",
  },
];

export default async function Nav() {
  const { isAuthenticated } = await auth();
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Trees />
              <span className="text-lg font-semibold tracking-tighter">EnvShiksha</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggleButton />
            {!isAuthenticated ? (
              <>
                <Button asChild variant="outline">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </>
            ) : (
              <div className="size-10 border rounded-full grid items-center justify-center shadow-xs cursor-pointer">
                <UserButton />
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileNav />
      </div>
    </section>
  );
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
