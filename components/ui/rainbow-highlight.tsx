import { RoughNotation } from "react-rough-notation";

/**
 * The function exports a React component that uses the RoughNotation library to create a rainbow
 * highlight effect on a given text.
 * @param {RainbowHighlightProps}  - - `RainbowHighlightProps`: an interface defining the props for the
 * `RainbowHighlight` component
 * @returns The `RainbowHighlight` component is being returned. It takes in two props: `color` and
 * `children`. It uses the `RoughNotation` component from the `react-rough-notation` library to create
 * a highlight effect on the `children` prop with the specified `color`. The `animationDuration` is
 * calculated based on the length of the `children` prop. The
 */

interface RainbowHighlightProps {
  color: string;
  children: string;
}

export function RainbowHighlight({ color, children }: RainbowHighlightProps) {
  const animationDuration = Math.floor(30 * children.length);
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 1]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
}
