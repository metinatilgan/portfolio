// Match next.config.mjs:basePath. Used for raw hrefs (images, PDFs) where
// Next.js doesn't auto-prepend basePath like it does for <Link>.
export const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
