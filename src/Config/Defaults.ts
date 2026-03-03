import type { SpacingToken } from '../Theme/types';

/**
 * Centralized default values used across the DSL framework.
 * All framework defaults are defined here to avoid magic numbers
 * and scattered hard-coded values throughout the codebase.
 */
export const DSLDefaults = {
  /** Default spacing token used when no value is provided for padding, margin, contentPadding. */
  spacing: 'md' as SpacingToken,

  /** Default edge used when no edge is provided for padding, margin, contentPadding. */
  edge: 'all' as const,

  /** Default flex value when .flex() is called without arguments. */
  flex: 1,

  /** Default keyboard avoiding offset in points. */
  keyboardAvoidingOffset: 100,

  /** Default keyboard should persist taps behavior. */
  keyboardShouldPersistTaps: 'handled' as const,

  /** Default bounces behavior for scroll views. */
  bounces: true,

  /** Default shadow configuration applied by .shadow() with no arguments. */
  shadow: {
    color: 'cardShadow',
    offset: { width: 0, height: 2 },
    opacity: 1,
    radius: 8,
    elevation: 3,
  },

  /** TextInput styling defaults used by DSLRenderer. */
  input: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
    labelMarginBottom: 6,
    errorMarginTop: 4,
    wrapperMarginBottom: 12,
  },

  /** Default icon size in points when none is specified. */
  iconSize: 18,

  /** Opacity applied to pressable elements in the pressed state. */
  pressedOpacity: 0.9,

  /** Full opacity for non-pressed state. */
  fullOpacity: 1,

  /** Default button height in points. */
  buttonHeight: 48,

  /** Default button corner radius in points. */
  buttonCornerRadius: 12,

  /** Default button horizontal padding in points. */
  buttonPaddingHorizontal: 16,

  /** Default button icon spacing in points. */
  buttonIconSpacing: 8,

  /** Default button font size token. */
  buttonFontSize: 'body' as const,

  /** Default button outlined border width. */
  buttonBorderWidth: 1.5,

  /** Default image resize mode. */
  imageResizeMode: 'cover' as const,

  /** Default separator/divider color token. */
  dividerColor: 'separator',

  /** Default link color token. */
  linkColor: 'tint',

  /** Default onEndReached threshold for lazy lists. */
  onEndReachedThreshold: 0.5,
} as const;
