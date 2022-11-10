import { useIsomorphicLayoutEffect } from "framer-motion";
import { useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export function useBreakPoint(key: keyof typeof breakpoints) {
  return useMediaQuery(`(min-width: ${breakpoints[key]})`);
}

export default useMediaQuery;
