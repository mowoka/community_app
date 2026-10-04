import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using `clsx` for conditional logic
 * and `tailwind-merge` to resolve Tailwind CSS class conflicts.
 *
 * @param inputs - Class names, arrays, or conditional class objects.
 * @returns Merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
