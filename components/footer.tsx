import { MainLinkItem } from "@/types";
import Link from "next/link";

interface FooterProps {
  items?: MainLinkItem[];
}

export default function Footer({ items }: FooterProps) {
  return (
    <footer>
      <div className="flex flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-20 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
          <p className="text-center font-bold leading-loose md:text-left">
            Ibrahim Raimi &copy; 2023 🖤
          </p>
        </div>

        {items?.length ? (
          <div className="text-center  md:text-left">
            {items?.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline ml-4 underline-offset-4 font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ) : (
          <p className="font-semibold">Engineering Smile :)</p>
        )}
      </div>
    </footer>
  );
}
