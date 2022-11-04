import { transform } from "~/utils/css";

describe("utils > css", () => {
  describe("transform", () => {
    test(
      "passing [0, 0], should return { transform: `translate(${x}rem, ${y}rem)` }"
    );

    expect(transform([0, 0])).toStrictEqual({
      transform: `translate(0rem, 0rem)`,
    });
  });
});
