export type SpacingToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BorderRadiusToken = 'sm' | 'md' | 'lg';
export type FontSizeToken =
  | 'micro'
  | 'small'
  | 'caption'
  | 'footnote'
  | 'body'
  | 'subtitle'
  | 'title2'
  | 'title'
  | 'header'
  | 'hero';
export type FontWeightToken = 'regular' | 'medium' | 'semibold' | 'bold';

export interface DSLFonts {
  size: Record<FontSizeToken, number>;
  weight: Record<FontWeightToken, string>;
  lineHeight: Record<string, number>;
}

export interface DSLLayout {
  spacing: Record<SpacingToken, number>;
  borderRadius: Record<BorderRadiusToken, number>;
}

export interface DSLColors {
  [key: string]: string;
}

export interface DSLThemeConfig {
  colors: { light: DSLColors; dark: DSLColors };
  fonts: DSLFonts;
  layout: DSLLayout;
}
