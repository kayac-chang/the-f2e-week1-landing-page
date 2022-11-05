import { clamp as _clamp } from "ramda";
import { useMemo, useReducer } from "react";

type Action =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "set"; value: number }
  | { type: "reset" };

function createReducer(initial = 0, max = Infinity, min = 0) {
  const clamp = _clamp(min, max);

  return (counter: number, action: Action): number => {
    if (action.type === "inc") {
      return clamp(counter + 1);
    }
    if (action.type === "dec") {
      return clamp(counter - 1);
    }
    if (action.type === "reset") {
      return initial;
    }
    if (action.type === "set") {
      return clamp(action.value);
    }
    return counter;
  };
}

function useCounter(initial = 0, max?: number, min?: number) {
  const [counter, dispatch] = useReducer(
    createReducer(initial, max, min),
    initial
  );

  const actions = useMemo(
    () => ({
      inc: () => dispatch({ type: "inc" }),
      dec: () => dispatch({ type: "dec" }),
      reset: () => dispatch({ type: "reset" }),
      set: (value: number) => dispatch({ type: "set", value }),
    }),
    [dispatch]
  );

  return [counter, actions] as const;
}

export default useCounter;
