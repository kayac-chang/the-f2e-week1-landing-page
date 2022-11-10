import type { Variants, AnimationControls } from "framer-motion";
import { useAnimation, useIsomorphicLayoutEffect } from "framer-motion";
import { mergeDeepRight } from "ramda";
import type { Falsy } from "ramda";

interface Sequence {
  (animation: AnimationControls): Promise<void>;
}
export function useAnimationSeq(...sequences: Sequence[]) {
  const animation = useAnimation();

  useIsomorphicLayoutEffect(() => {
    let stop = false;

    async function run([sequence, ...sequences]: Sequence[]): Promise<void> {
      if (stop) return;
      if (sequence) await sequence(animation);
      if (sequences.length > 0) return run(sequences);
    }
    run(sequences);

    return () => {
      stop = true;
      animation.stop();
    };
  }, [animation, sequences]);

  return animation;
}

export function merge(...variants: (Variants | Falsy)[]): Variants {
  const _variants = variants.filter(Boolean) as Variants[];

  return _variants.reduce(mergeDeepRight);
}
