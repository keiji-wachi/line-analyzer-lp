export type Platform =
  | "general"
  | "crowdworks"
  | "lancers";

console.log(
  "NEXT_PUBLIC_PLATFORM:",
  process.env.NEXT_PUBLIC_PLATFORM
);

export const PLATFORM = (
  process.env.NEXT_PUBLIC_PLATFORM ?? "general"
) as Platform;