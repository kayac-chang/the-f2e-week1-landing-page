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
