import { clsx, type ClassValue } from "clsx"
import matter from "gray-matter";
import path from "path";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function loadHomeBannerContent() {
  const filePath = path.join(process.cwd(), "src/content", "content.md");
  const file = matter.read(filePath);
  return file.data || {};
}

export interface Testimonial {
  quote: string;
  author: string;
}

export function loadTestimonialsContent(): Testimonial[] {
  const filePath = path.join(process.cwd(), "src/content", "testimonials.md");
  const file = matter.read(filePath);
  return file.data.testimonials || [];
}