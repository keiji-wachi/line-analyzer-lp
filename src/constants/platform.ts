export type Platform =
  | "general"
  | "crowdworks"
  | "lancers";

export const PLATFORM = (
  process.env.NEXT_PUBLIC_PLATFORM ?? "general"
) as Platform;