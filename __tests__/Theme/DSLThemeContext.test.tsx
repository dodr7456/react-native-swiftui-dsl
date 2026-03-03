import React from 'react';
import { render } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';
import { useDSLTheme, DSLThemeContext } from '../../src/Theme/DSLThemeContext';
import { testThemeConfig } from '../Helpers/testThemeConfig';

function ThemeReader() {
  const { config, colorScheme } = useDSLTheme();
  return <RNText testID="reader">{colorScheme}:{config.fonts.size.body}</RNText>;
}

describe('useDSLTheme', () => {
  it('throws when used outside DSLThemeProvider', () => {
    // Suppress console.error for expected error
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      render(<ThemeReader />);
    }).toThrow('DSLThemeProvider is required to use DSL components');
    spy.mockRestore();
  });

  it('returns config and colorScheme when inside provider', () => {
    const { getByTestId } = render(
      <DSLThemeContext.Provider value={{ config: testThemeConfig, colorScheme: 'light' }}>
        <ThemeReader />
      </DSLThemeContext.Provider>
    );
    const text = getByTestId('reader');
    // children is an array: ["light", ":", 15]
    const children = text.props.children;
    expect(children).toContain('light');
    expect(children).toContain(testThemeConfig.fonts.size.body);
  });

  it('returns dark colorScheme when set', () => {
    const { getByTestId } = render(
      <DSLThemeContext.Provider value={{ config: testThemeConfig, colorScheme: 'dark' }}>
        <ThemeReader />
      </DSLThemeContext.Provider>
    );
    const text = getByTestId('reader');
    expect(text.props.children).toContain('dark');
  });
});

describe('DSLThemeContext', () => {
  it('defaults to null', () => {
    let contextValue: unknown = 'not-null';
    function ContextChecker() {
      contextValue = React.useContext(DSLThemeContext);
      return <RNText>check</RNText>;
    }
    render(<ContextChecker />);
    expect(contextValue).toBeNull();
  });
});
