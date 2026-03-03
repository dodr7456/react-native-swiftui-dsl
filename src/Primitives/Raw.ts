import React from 'react';
import { ViewBuilder } from '../Core/ViewBuilder';

export function Raw(element: React.ReactElement): ViewBuilder {
  return new ViewBuilder('raw', { rawElement: element });
}
