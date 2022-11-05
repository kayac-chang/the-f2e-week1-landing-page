import type {
  AnimationControls} from "framer-motion";
import {
  useAnimation,
  useIsomorphicLayoutEffect,
} from "framer-motion";

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
