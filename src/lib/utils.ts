import { clsx, type ClassValue } from "clsx"
import matter from "gray-matter";
import path from "path";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function loadHomeContent() {
  const filePath = path.join(process.cwd(), "src/content", "content.md");
  const file = matter.read(filePath);
  return file.data || {};
}