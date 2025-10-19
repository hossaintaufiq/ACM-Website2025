
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
  const pathName = usePathname()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='p-1'>
        <button
          className={buttonVariants({
            variant: "ghost",
            className: `md:px-1 lg:text-xl ${pathName === '/chapter-officer' || '/ex-chapter-officer' ? "bg-white text-black" : ""}`,
          })}
        >
          Team <MdArrowDropDown />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>

          <Link href={"/chapter-officer"}>
            <DropdownMenuItem>
              <span>Chapter Officers</span>
            </DropdownMenuItem>
          </Link>

          <Link href={"/ex-chapter-officer"}>
            <DropdownMenuItem>
              <span>Ex Chapter Officers</span>
            </DropdownMenuItem>
          </Link>

          <Link href={"/web_team"}>
            <DropdownMenuItem>
              <span>Web Contributors</span>
            </DropdownMenuItem>
          </Link>

        </DropdownMenuGroup>
      </DropdownMenuContent>

    </DropdownMenu>
  );
}
