import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function withBase(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
