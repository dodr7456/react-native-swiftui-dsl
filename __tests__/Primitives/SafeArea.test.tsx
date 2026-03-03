import React from 'react';
import { SafeArea } from '../../src/Primitives/SafeArea';
import { Text } from '../../src/Primitives/Text';
import { renderWithDSLTheme, testThemeConfig } from '../Helpers/renderWithDSLTheme';

const Colors = testThemeConfig.colors;

describe('SafeArea', () => {
  it('creates a safearea element type', () => {
    const builder = SafeArea(Text('Hello'));
    expect(builder.elementType).toBe('safearea');
  });

  it('renders children', () => {
    const { getByText } = renderWithDSLTheme(
      SafeArea(Text('Safe Content')).toElement()
    );
    expect(getByText('Safe Content')).toBeTruthy();
  });

  it('passes edges modifier', () => {
    const builder = SafeArea(Text('X')).edges(['top']);
    expect(builder.modifiers).toContainEqual({
      type: 'safeAreaEdges',
      value: ['top'],
    });
  });

  it('applies background color', () => {
    const { toJSON } = renderWithDSLTheme(
      SafeArea(Text('X')).background('background').toElement()
    );
    const tree = toJSON();
    expect(tree.props.style).toMatchObject({
      backgroundColor: Colors.light.background,
    });
  });

  it('applies flex modifier', () => {
    const { toJSON } = renderWithDSLTheme(
      SafeArea(Text('X')).flex(1).toElement()
    );
    const tree = toJSON();
    expect(tree.props.style).toMatchObject({ flex: 1 });
  });

  it('chains edges, flex, and background', () => {
    const builder = SafeArea(Text('X'))
      .edges(['top'])
      .flex(1)
      .background('background');

    expect(builder.modifiers).toHaveLength(3);
    expect(builder.elementType).toBe('safearea');
  });
});
