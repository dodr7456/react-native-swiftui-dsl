import React from 'react';
import { Icon } from '../../src/Primitives/Icon';
import { DSLDefaults } from '../../src/Config/Defaults';
import { renderWithDSLTheme, testThemeConfig } from '../Helpers/renderWithDSLTheme';

const Colors = testThemeConfig.colors;

describe('Icon', () => {
  it('creates an icon element type', () => {
    const builder = Icon('star');
    expect(builder.elementType).toBe('icon');
  });

  it('stores icon name in props', () => {
    const builder = Icon('heart');
    expect(builder.props.iconName).toBe('heart');
  });

  it('stores custom size in props', () => {
    const builder = Icon('star', { size: 24 });
    expect(builder.props.iconSize).toBe(24);
  });

  it('stores custom color in props', () => {
    const builder = Icon('star', { color: 'error' });
    expect(builder.props.iconColor).toBe('error');
  });

  it('renders without crashing', () => {
    const { toJSON } = renderWithDSLTheme(Icon('star').toElement());
    expect(toJSON()).toBeTruthy();
  });

  it('applies padding modifier', () => {
    const builder = Icon('star').padding('sm');
    expect(builder.modifiers).toContainEqual({
      type: 'padding',
      value: 'sm',
      edge: 'all',
    });
  });

  it('applies onTap modifier', () => {
    const handler = jest.fn();
    const builder = Icon('star').onTap(handler);
    expect(builder.modifiers).toContainEqual({
      type: 'onTap',
      handler,
    });
  });

  it('applies testID', () => {
    const builder = Icon('star').testID('my-icon');
    expect(builder.modifiers).toContainEqual({ type: 'testID', value: 'my-icon' });
  });
});
