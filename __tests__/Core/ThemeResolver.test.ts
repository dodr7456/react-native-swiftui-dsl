import { resolveColor, isColorToken } from '../../src/Core/ThemeResolver';
import { testThemeConfig } from '../Helpers/testThemeConfig';

const colors = testThemeConfig.colors;

describe('ThemeResolver', () => {
  describe('resolveColor', () => {
    it('resolves a color token to light theme value', () => {
      expect(resolveColor('tint', 'light', colors)).toBe(colors.light.tint);
    });

    it('resolves a color token to dark theme value', () => {
      expect(resolveColor('tint', 'dark', colors)).toBe(colors.dark.tint);
    });

    it('passes through raw hex strings unchanged', () => {
      const rawHex = '#FF0000';
      expect(resolveColor(rawHex, 'light', colors)).toBe(rawHex);
      expect(resolveColor(rawHex, 'dark', colors)).toBe(rawHex);
    });

    it('passes through rgba strings unchanged', () => {
      const rawRgba = 'rgba(0,0,0,0.5)';
      expect(resolveColor(rawRgba, 'light', colors)).toBe(rawRgba);
    });

    it('resolves all standard tokens without errors', () => {
      const tokens = Object.keys(colors.light);
      for (const token of tokens) {
        expect(resolveColor(token, 'light', colors)).toBe(colors.light[token]);
        expect(resolveColor(token, 'dark', colors)).toBe(colors.dark[token]);
      }
    });
  });

  describe('isColorToken', () => {
    it('returns true for valid color tokens', () => {
      expect(isColorToken('tint', colors.light)).toBe(true);
      expect(isColorToken('card', colors.light)).toBe(true);
      expect(isColorToken('secondaryText', colors.light)).toBe(true);
    });

    it('returns false for raw color strings', () => {
      expect(isColorToken('#FF0000', colors.light)).toBe(false);
      expect(isColorToken('not-a-token', colors.light)).toBe(false);
    });
  });
});
