import React from 'react';
import { render } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';
import { DSLThemeProvider } from '../../src/Theme/DSLThemeProvider';
import { useDSLTheme } from '../../src/Theme/DSLThemeContext';
import { testThemeConfig } from '../Helpers/testThemeConfig';

function ThemeConsumer() {
  const { config, colorScheme } = useDSLTheme();
  return (
    <RNText testID="consumer">
      {colorScheme}:{config.colors.light.tint}
    </RNText>
  );
}

describe('DSLThemeProvider', () => {
  it('provides theme config to children', () => {
    const { getByTestId } = render(
      <DSLThemeProvider config={testThemeConfig} colorScheme="light">
        <ThemeConsumer />
      </DSLThemeProvider>
    );
    const text = getByTestId('consumer');
    expect(text.props.children).toContain('light');
    expect(text.props.children).toContain(testThemeConfig.colors.light.tint);
  });

  it('provides dark color scheme', () => {
    const { getByTestId } = render(
      <DSLThemeProvider config={testThemeConfig} colorScheme="dark">
        <ThemeConsumer />
      </DSLThemeProvider>
    );
    const text = getByTestId('consumer');
    expect(text.props.children).toContain('dark');
  });

  it('renders children', () => {
    const { getByText } = render(
      <DSLThemeProvider config={testThemeConfig} colorScheme="light">
        <RNText>Hello World</RNText>
      </DSLThemeProvider>
    );
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders multiple children', () => {
    const { getByText } = render(
      <DSLThemeProvider config={testThemeConfig} colorScheme="light">
        <RNText>First</RNText>
        <RNText>Second</RNText>
      </DSLThemeProvider>
    );
    expect(getByText('First')).toBeTruthy();
    expect(getByText('Second')).toBeTruthy();
  });
});
