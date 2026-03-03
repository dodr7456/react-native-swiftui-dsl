import React from 'react';
import { Divider } from '../../src/Primitives/Divider';
import { renderWithDSLTheme, testThemeConfig } from '../Helpers/renderWithDSLTheme';

const Colors = testThemeConfig.colors;

describe('Divider', () => {
  it('creates a divider element type', () => {
    const builder = Divider();
    expect(builder.elementType).toBe('divider');
  });

  it('renders with separator color', () => {
    const { toJSON } = renderWithDSLTheme(
      Divider().testID('divider').toElement()
    );
    const tree = toJSON();
    expect(tree).toBeTruthy();
    expect(tree.props.style).toMatchObject({
      backgroundColor: Colors.light.separator,
    });
  });

  it('applies custom foregroundColor', () => {
    const { toJSON } = renderWithDSLTheme(
      Divider().foregroundColor('tint').testID('custom-divider').toElement()
    );
    const tree = toJSON();
    expect(tree.props.style).toMatchObject({
      backgroundColor: Colors.light.tint,
    });
  });

  it('applies testID', () => {
    const { getByTestId } = renderWithDSLTheme(
      Divider().testID('my-divider').toElement()
    );
    expect(getByTestId('my-divider')).toBeTruthy();
  });

  it('applies margin modifiers', () => {
    const builder = Divider().marginVertical('sm');
    expect(builder.modifiers).toContainEqual({
      type: 'margin',
      value: 'sm',
      edge: 'vertical',
    });
  });
});
