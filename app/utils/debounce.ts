import { debounce as _debounce } from "perfect-debounce";

const FPS = 60;
const leading = Object.freeze({ leading: true });
function byLeadFrame<ArgumentsT extends unknown[], ReturnT>(
  fn: (...args: ArgumentsT) => PromiseLike<ReturnT> | ReturnT
) {
  return _debounce(fn, FPS, leading);
}

export default {
  byLeadFrame,
};
