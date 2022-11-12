import { percent } from "~/utils/math";
import type { WheelEvent } from "react";
import type { Pred } from "ramda";

export function getScrollPercent(target: HTMLElement): number {
  return percent(target.scrollTop, target.scrollHeight - target.clientHeight);
}
export function isReachBottom(target: HTMLElement): boolean {
  if (target.scrollHeight - target.clientHeight > 0)
    return getScrollPercent(target) >= 100;
  return true;
}
export function isReachTop(target: HTMLElement): boolean {
  if (target.scrollHeight - target.clientHeight > 0)
    return getScrollPercent(target) <= 0;
  return true;
}

type Direction = 1 | 0 | -1;
export function getWheelDirection(event: WheelEvent): Direction {
  return Math.sign(event.deltaY) as Direction;
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

export function* traverse(pred: Pred<[HTMLElement]>, root: HTMLElement) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT,
    (node) =>
      pred(node as HTMLElement)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP
  );

  while (walker.nextNode()) yield walker.currentNode as HTMLElement;

  return;
}

export function isScrollable(element: HTMLElement): boolean {
  return window.getComputedStyle(element).overflowY !== "hidden";
}

export function getScrollableElement(
  element: HTMLElement
): HTMLElement | undefined {
  return Array.from(traverse(isScrollable, element)).at(0);
}

export function isWheelOverScroll(event: WheelEvent<HTMLElement>): boolean {
  const target = getScrollableElement(event.currentTarget);
  if (!target) return false;

  if (isWheelDown(event) && isReachBottom(target)) return true;

  if (isWheelUp(event) && isReachTop(target)) return true;

  return false;
}
