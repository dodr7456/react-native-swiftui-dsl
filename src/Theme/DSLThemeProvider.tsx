import React from 'react';
import { DSLThemeConfig } from './types';
import { DSLThemeContext } from './DSLThemeContext';

interface Props {
  config: DSLThemeConfig;
  colorScheme: 'light' | 'dark';
  children: React.ReactNode;
}

export function DSLThemeProvider({ config, colorScheme, children }: Props) {
  return (
    <DSLThemeContext.Provider value={{ config, colorScheme }}>
      {children}
    </DSLThemeContext.Provider>
  );
}
