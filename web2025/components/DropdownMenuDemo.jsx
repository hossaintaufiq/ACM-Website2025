"use client";
import { useMemo } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";

export function DropdownMenuDemo() {
  const pathName = usePathname();

  // Memoize menu items
  const menuItems = useMemo(
    () => [
      { href: "/chapter-officer", label: "Chapter Officers" },
      { href: "/ex-chapter-officer", label: "Ex Chapter Officers" },
      { href: "/web_team", label: "Web Contributors" },
    ],
    []
  );

  // Check if any team page is active
  const isTeamActive = useMemo(
    () =>
      pathName === "/chapter-officer" ||
      pathName === "/ex-chapter-officer" ||
      pathName === "/web_team",
    [pathName]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-1">
        <button
          className={buttonVariants({
            variant: "ghost",
            className: `md:px-1 lg:text-xl transition-all duration-200 hover:scale-105 ${
              isTeamActive
                ? "bg-white/10 text-white font-semibold backdrop-blur-sm"
                : "text-white/80 hover:text-white"
            }`,
          })}
        >
          Team <MdArrowDropDown className="inline transition-transform duration-200 group-hover:rotate-180" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52 bg-[#020817]/95 backdrop-blur-md border-white/10">
        <DropdownMenuGroup>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} prefetch={true}>
              <DropdownMenuItem
                className={`cursor-pointer transition-colors duration-200 ${
                  pathName === item.href
                    ? "bg-white/10 text-white font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{item.label}</span>
            </DropdownMenuItem>
          </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
