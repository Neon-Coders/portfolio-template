import Link from "next/link";
import { cn } from "@/lib/utils";
import { MainLinkItem } from "@/types";
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/colors";

interface MainNavProps {
  items?: MainLinkItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex  h-16 items-center justify-between gap-6 md:gap-10">
      <Link href="/" className="items-center space-x-2 md:flex">
        <span
          className={cn(
            "font-bold tracking-wider transition-colors text-gray-900 hover:text-gray-500 focus:text-gray-500",
            FOCUS_VISIBLE_OUTLINE
          )}
        >
          Ibrahim
        </span>
        <span
          aria-hidden="true"
          className="hidden md:block md:h-6 md:w-px md:bg-gray-100"
        ></span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className={cn(
                "flex items-center text-xl font-semibold text-gray-800 sm:text-sm",
                FOCUS_VISIBLE_OUTLINE
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : (
        "No Links"
      )}
    </div>
  );
}
