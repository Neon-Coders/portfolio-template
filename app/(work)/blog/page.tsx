/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import * as React from "react";
import { RainbowHighlight } from "@/components/ui/rainbow-highlight";
import { LIGHT_COLORS } from "@/lib/colors";
import { shuffleArray } from "@/lib/shuffle-array";
import Link from "next/link";
import { RoughNotationGroup } from "react-rough-notation";
import { useIsFontReady } from "@/hooks/useIsFontReady";

type Props = {};

export default function page() {
  const isFontReady = useIsFontReady();
  const [colors, setColors] = React.useState<string[]>([]);

  React.useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 lg:text-3xl mt-5">
        Blog
      </h2>
      <RoughNotationGroup show={isFontReady}>
        <p className="mt-2 text-gray-700 lg:text-lg">
          Currently, I&apos;m setting up my blog, but in the main time you check
          the articles have written on{" "}
          <Link href="https://dev.to/ibrahimraimi" className="font-semibold">
            <RainbowHighlight color={colors[5]}>Dev.to</RainbowHighlight>
          </Link>
        </p>
      </RoughNotationGroup>
    </div>
  );
}
