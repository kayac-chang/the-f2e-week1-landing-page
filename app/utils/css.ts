export type Vec2 = [number, number];
export const transform = ([x, y]: Vec2) => ({
  transform: `translate(${x}rem, ${y}rem)`,
});
