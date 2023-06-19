import * as React from "react";

/**
 * A custom hook to detect when custom fonts have finished loading
 * ? @see: https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts
 */

export function useIsFontReady() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    document.fonts.ready.then(() => {
      setIsReady(true);
    });
  }, []);

  return isReady;
}
