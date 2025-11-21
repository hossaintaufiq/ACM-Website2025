"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ChapterOfficersTab() {
  let pathname = usePathname();
  pathname = pathname.split("/").slice(2).join("");
  return (
    <div className="my-5 flex items-center justify-center gap-5 [&>*]:p-1 [&>*]:rounded-xl">
      <Link
        href="/chapter-officer/executive-body"
        className={`${
          pathname === ""
            ? "bg-[#2F92D0]"
            : "hover:bg-[#2F92D0]/50"
        } `}
      >
        Executive Body
      </Link>

      <Link
        href="/chapter-officer/sub-executive"
        className={`${
          pathname === "sub-executive"
            ? "bg-[#2F92D0]"
            : "hover:bg-[#2F92D0]/50"
        }`}
      >
        Sub-Executive
      </Link>

      <Link
        href="/chapter-officer/coordinator"
        className={`${
          pathname === "coordinator" ? "bg-[#2F92D0]" : "hover:bg-[#2F92D0]/50"
        }`}
      >
        Coordinator
      </Link>

      <Link
        href="/chapter-officer/incharge"
        className={`${
          pathname === "incharge" ? "bg-[#2F92D0]" : "hover:bg-[#2F92D0]/50"
        }`}
      >
        Incharge
      </Link>

      <Link
        href="/chapter-officer/moderator"
        className={`${
          pathname === "moderator" ? "bg-[#2F92D0]" : "hover:bg-[#2F92D0]/50"
        } `}
      >
        Moderator
      </Link>
    </div>
  );
}

export default ChapterOfficersTab;
