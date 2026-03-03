import { createContext, useContext } from 'react';
import { DSLThemeConfig } from './types';

export interface DSLThemeContextValue {
  config: DSLThemeConfig;
  colorScheme: 'light' | 'dark';
}

export const DSLThemeContext = createContext<DSLThemeContextValue | null>(null);

export function useDSLTheme(): DSLThemeContextValue {
  const ctx = useContext(DSLThemeContext);
  if (!ctx) {
    throw new Error('DSLThemeProvider is required to use DSL components');
  }
  return ctx;
}
