import { not } from "ramda";
import { useCallback, useState } from "react";

export function useToggle(initial = false) {
  const [flag, setFlag] = useState(initial);

  const toggle = useCallback(() => setFlag(not), [setFlag]);

  return [flag, toggle, setFlag] as const;
}
