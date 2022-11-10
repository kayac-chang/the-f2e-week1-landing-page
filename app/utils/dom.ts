import { percent } from "~/utils/math";
import type { WheelEvent } from "react";

export function getScrollPercent(target: HTMLElement) {
  return percent(target.scrollTop, target.scrollHeight - target.clientHeight);
}
export function isReachBottom(target: HTMLElement): boolean {
  return getScrollPercent(target) >= 100;
}
export function isReachTop(target: HTMLElement): boolean {
  return getScrollPercent(target) <= 0;
}

export function getWheelDirection(event: WheelEvent) {
  return Math.sign(event.deltaY);
}
export function isWheelDown(event: WheelEvent): boolean {
  return getWheelDirection(event) === 1;
}
export function isWheelUp(event: WheelEvent): boolean {
  return getWheelDirection(event) === -1;
}
export function isWheelNotMove(event: WheelEvent): boolean {
  return getWheelDirection(event) === 0;
}

export function isOverScroll(event: WheelEvent<HTMLElement>): boolean {
  if (isWheelDown(event) && isReachBottom(event.currentTarget)) {
    return true;
  }
  if (isWheelUp(event) && isReachTop(event.currentTarget)) {
    return true;
  }
  return false;
}

// we want user only navigate to next section when they reach to the edge of the page,
// so we have to prevent event propagation to full page scroll.
export function onlyPropagationWhenOverScroll(event: WheelEvent<HTMLElement>) {
  return !isOverScroll(event) && event.stopPropagation();
}
