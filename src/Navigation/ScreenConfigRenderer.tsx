import React from 'react';
import { Stack } from 'expo-router';

interface ScreenConfigRendererProps {
  options: Record<string, unknown>;
  children: React.ReactNode;
}

export function ScreenConfigRenderer({ options, children }: ScreenConfigRendererProps) {
  return (
    <>
      <Stack.Screen options={options} />
      {children}
    </>
  );
}
