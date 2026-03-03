import React from 'react';
import { Spinner } from '../../src/Primitives/Spinner';
import { renderWithDSLTheme } from '../Helpers/renderWithDSLTheme';

describe('Spinner', () => {
  it('creates a spinner element type', () => {
    const builder = Spinner();
    expect(builder.elementType).toBe('spinner');
  });

  it('defaults to large size', () => {
    const builder = Spinner();
    expect(builder.props.spinnerSize).toBe('large');
  });

  it('accepts small size', () => {
    const builder = Spinner('small');
    expect(builder.props.spinnerSize).toBe('small');
  });

  it('renders without crashing', () => {
    const { toJSON } = renderWithDSLTheme(Spinner().toElement());
    expect(toJSON()).toBeTruthy();
  });

  it('applies testID', () => {
    const builder = Spinner().testID('loading');
    expect(builder.modifiers).toContainEqual({ type: 'testID', value: 'loading' });
  });

  it('applies padding modifier', () => {
    const builder = Spinner().padding('lg');
    expect(builder.modifiers).toContainEqual({
      type: 'padding',
      value: 'lg',
      edge: 'all',
    });
  });
});
