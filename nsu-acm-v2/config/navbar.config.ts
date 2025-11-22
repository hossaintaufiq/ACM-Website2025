export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navbarConfig: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Our Team",
    href: "/our-team",
  },
  {
    label: "Recruitment",
    href: "/recruitment",
  },
  {
    label: "Sponsors",
    href: "/sponsors",
  },
  {
    label: "Teams",
    href: "#",
    children: [
      {
        label: "Chapter Officials",
        href: "/chapter-officials",
      },
      {
        label: "Ex-Chapter Officials",
        href: "/ex-chapter-officials",
      },
      {
        label: "Web Contributors",
        href: "/web-contributors",
      },
    ],
  },
  
];

