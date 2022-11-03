interface ImageSrc {
  src: string;
  width: string;
}

export function getSrcSet(sets: ImageSrc[]) {
  return sets.map(({ src, width }) => [src, width].join(" ")).join(",");
}
