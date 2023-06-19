"use client";

import { HighlightOnHover } from "@/components/ui/highlight-on-hover";
import Link from "next/link";

export default function page() {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 lg:text-3xl mt-5">
        Get in touch
      </h2>
      <p className="mt-2 text-gray-700 lg:text-lg">
        Do you have a job opportunity or idea you&apos;d like to discuss? Feel
        free to reach me at{" "}
        <HighlightOnHover>
          <Link href="mailto:raimiibrahim44@gmail.com" className="font-bold">
            raimiibrahim44@gmail.com
          </Link>
        </HighlightOnHover>
        . You can also find me on{" "}
        <HighlightOnHover>
          <Link
            href="https://twitter.com/ibrahimraimi_"
            target="_blank"
            className="font-semibold"
          >
            Twitter
          </Link>
        </HighlightOnHover>
        ,{" "}
        <HighlightOnHover>
          <Link
            href="https://github.com/ibrahimraimi"
            target="_blank"
            className="font-semibold"
          >
            Github
          </Link>
        </HighlightOnHover>{" "}
        and{" "}
        <HighlightOnHover>
          <Link
            href="https://www.linkedin.com/in/ibrahimraimi/"
            target="_blank"
            className="font-semibold"
          >
            Linkedin
          </Link>
        </HighlightOnHover>
        .
      </p>
    </div>
  );
}
