import { DSLColors } from '../Theme/types';

export type ColorValue = string;

export function resolveColor(
  value: ColorValue,
  theme: 'light' | 'dark',
  colors: { light: DSLColors; dark: DSLColors },
): string {
  if (value in colors.light) {
    return colors[theme][value];
  }
  return value;
}

export function isColorToken(
  value: string,
  colors: DSLColors,
): boolean {
  return value in colors;
}
