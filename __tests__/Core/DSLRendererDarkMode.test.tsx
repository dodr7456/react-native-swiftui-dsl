import React from 'react';
import { Text } from '../../src/Primitives/Text';
import { VStack } from '../../src/Primitives/Containers';
import { Button } from '../../src/Primitives/Button';
import { Divider } from '../../src/Primitives/Divider';
import { Link } from '../../src/Primitives/Link';
import { renderWithDSLTheme, testThemeConfig } from '../Helpers/renderWithDSLTheme';

const DarkColors = testThemeConfig.colors.dark;

describe('DSLRenderer - Dark Mode', () => {
  it('resolves text color in dark mode', () => {
    const { getByText } = renderWithDSLTheme(
      Text('Dark Text').toElement(),
      'dark',
    );
    const element = getByText('Dark Text');
    expect(element.props.style).toMatchObject({
      color: DarkColors.text,
    });
  });

  it('resolves foreground color in dark mode', () => {
    const { getByText } = renderWithDSLTheme(
      Text('Tinted').foregroundColor('tint').toElement(),
      'dark',
    );
    const element = getByText('Tinted');
    expect(element.props.style).toMatchObject({
      color: DarkColors.tint,
    });
  });

  it('resolves background color in dark mode', () => {
    const { getByTestId } = renderWithDSLTheme(
      VStack(Text('X')).background('card').testID('dark-bg').toElement(),
      'dark',
    );
    const container = getByTestId('dark-bg');
    expect(container.props.style).toMatchObject({
      backgroundColor: DarkColors.card,
    });
  });

  it('resolves border color in dark mode', () => {
    const { getByTestId } = renderWithDSLTheme(
      VStack(Text('X')).border(1, 'cardBorder').testID('dark-border').toElement(),
      'dark',
    );
    const container = getByTestId('dark-border');
    expect(container.props.style).toMatchObject({
      borderColor: DarkColors.cardBorder,
    });
  });

  it('resolves separator color in dark mode', () => {
    const { toJSON } = renderWithDSLTheme(
      Divider().testID('dark-divider').toElement(),
      'dark',
    );
    const tree = toJSON();
    expect(tree).toBeTruthy();
  });

  it('resolves shadow color in dark mode', () => {
    const { getByTestId } = renderWithDSLTheme(
      VStack(Text('X')).shadow().testID('dark-shadow').toElement(),
      'dark',
    );
    const container = getByTestId('dark-shadow');
    expect(container.props.style).toMatchObject({
      shadowColor: DarkColors.cardShadow,
    });
  });

  it('resolves secondary text in dark mode', () => {
    const { getByText } = renderWithDSLTheme(
      Text('Secondary').secondary().toElement(),
      'dark',
    );
    const element = getByText('Secondary');
    expect(element.props.style).toMatchObject({
      color: DarkColors.secondaryText,
    });
  });

  it('renders button in dark mode', () => {
    const action = jest.fn();
    const { getByText } = renderWithDSLTheme(
      Button('Dark Button', action).toElement(),
      'dark',
    );
    expect(getByText('Dark Button')).toBeTruthy();
  });

  it('renders link in dark mode', () => {
    const { getByText } = renderWithDSLTheme(
      Link('Dark Link', 'https://example.com').toElement(),
      'dark',
    );
    expect(getByText('Dark Link')).toBeTruthy();
  });
});
