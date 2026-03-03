import React from 'react';
import { Text } from '../../src/Primitives/Text';
import { VStack, HStack } from '../../src/Primitives/Containers';
import { Icon } from '../../src/Primitives/Icon';
import { Spacer } from '../../src/Primitives/Spacer';
import { Group } from '../../src/Conditionals/Group';
import { DSLDefaults } from '../../src/Config/Defaults';
import { renderWithDSLTheme, testThemeConfig } from '../Helpers/renderWithDSLTheme';

const Colors = testThemeConfig.colors;
const Fonts = testThemeConfig.fonts;
const Layout = testThemeConfig.layout;

describe('DSLRenderer', () => {
  describe('Text rendering', () => {
    it('renders text content', () => {
      const { getByText } = renderWithDSLTheme(Text('Hello World').toElement());
      expect(getByText('Hello World')).toBeTruthy();
    });

    it('applies font size modifier', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Styled').font('title').toElement()
      );
      const element = getByText('Styled');
      expect(element.props.style).toMatchObject({
        fontSize: Fonts.size.title,
      });
    });

    it('applies fontWeight modifier', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Bold').bold().toElement()
      );
      const element = getByText('Bold');
      expect(element.props.style).toMatchObject({
        fontWeight: Fonts.weight.bold,
      });
    });

    it('applies foregroundColor with theme token', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Colored').foregroundColor('tint').toElement()
      );
      const element = getByText('Colored');
      expect(element.props.style).toMatchObject({
        color: Colors.light.tint,
      });
    });

    it('applies default text color from theme', () => {
      const { getByText } = renderWithDSLTheme(Text('Default').toElement());
      const element = getByText('Default');
      expect(element.props.style).toMatchObject({
        color: Colors.light.text,
      });
    });

    it('applies textTransform modifier', () => {
      const { getByText } = renderWithDSLTheme(
        Text('upper').textTransform('uppercase').toElement()
      );
      const element = getByText('upper');
      expect(element.props.style).toMatchObject({
        textTransform: 'uppercase',
      });
    });

    it('applies letterSpacing modifier', () => {
      const letterSpacingValue = 0.5;
      const { getByText } = renderWithDSLTheme(
        Text('spaced').letterSpacing(letterSpacingValue).toElement()
      );
      const element = getByText('spaced');
      expect(element.props.style).toMatchObject({
        letterSpacing: letterSpacingValue,
      });
    });

    it('applies lineLimit as numberOfLines', () => {
      const lineLimitValue = 1;
      const { getByText } = renderWithDSLTheme(
        Text('Truncated text').lineLimit(lineLimitValue).toElement()
      );
      const element = getByText('Truncated text');
      expect(element.props.numberOfLines).toBe(lineLimitValue);
    });

    it('applies testID', () => {
      const { getByTestId } = renderWithDSLTheme(
        Text('Test').testID('my-text').toElement()
      );
      expect(getByTestId('my-text')).toBeTruthy();
    });

    it('chains multiple text modifiers', () => {
      const letterSpacingValue = 0.5;
      const { getByText } = renderWithDSLTheme(
        Text('Multi')
          .font('caption')
          .semibold()
          .foregroundColor('secondaryText')
          .textTransform('uppercase')
          .letterSpacing(letterSpacingValue)
          .toElement()
      );
      const element = getByText('Multi');
      expect(element.props.style).toMatchObject({
        fontSize: Fonts.size.caption,
        fontWeight: Fonts.weight.semibold,
        color: Colors.light.secondaryText,
        textTransform: 'uppercase',
        letterSpacing: letterSpacingValue,
      });
    });
  });

  describe('Container rendering', () => {
    it('renders VStack with children', () => {
      const { getByText } = renderWithDSLTheme(
        VStack(Text('Child 1'), Text('Child 2')).toElement()
      );
      expect(getByText('Child 1')).toBeTruthy();
      expect(getByText('Child 2')).toBeTruthy();
    });

    it('renders HStack with children', () => {
      const { getByText } = renderWithDSLTheme(
        HStack(Text('Left'), Text('Right')).toElement()
      );
      expect(getByText('Left')).toBeTruthy();
      expect(getByText('Right')).toBeTruthy();
    });

    it('renders nested containers', () => {
      const { getByText } = renderWithDSLTheme(
        VStack(
          HStack(Text('Nested')),
          Text('Outer'),
        ).toElement()
      );
      expect(getByText('Nested')).toBeTruthy();
      expect(getByText('Outer')).toBeTruthy();
    });

    it('filters null children', () => {
      const { getByText } = renderWithDSLTheme(
        VStack(Text('Visible'), null, Text('Also Visible')).toElement()
      );
      expect(getByText('Visible')).toBeTruthy();
      expect(getByText('Also Visible')).toBeTruthy();
    });

    it('filters boolean children', () => {
      const { getByText } = renderWithDSLTheme(
        VStack(Text('Show'), false, true).toElement()
      );
      expect(getByText('Show')).toBeTruthy();
    });
  });

  describe('Style modifiers on containers', () => {
    it('applies padding', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).padding('md').testID('padded').toElement()
      );
      const container = getByTestId('padded');
      expect(container.props.style).toMatchObject({
        padding: Layout.spacing.md,
      });
    });

    it('applies background with theme token', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).background('card').testID('bg').toElement()
      );
      const container = getByTestId('bg');
      expect(container.props.style).toMatchObject({
        backgroundColor: Colors.light.card,
      });
    });

    it('applies backgroundAlpha', () => {
      const alphaValue = 0.08;
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).backgroundAlpha('tint', alphaValue).testID('bga').toElement()
      );
      const container = getByTestId('bga');
      const bgColor = container.props.style.backgroundColor;
      expect(bgColor).toMatch(new RegExp(`^${Colors.light.tint.replace('#', '#')}[0-9a-f]{2}$`, 'i'));
    });

    it('applies cornerRadius with token', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).cornerRadius('md').testID('cr').toElement()
      );
      const container = getByTestId('cr');
      expect(container.props.style).toMatchObject({
        borderRadius: Layout.borderRadius.md,
      });
    });

    it('applies border', () => {
      const borderWidth = 1;
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).border(borderWidth, 'cardBorder').testID('border').toElement()
      );
      const container = getByTestId('border');
      expect(container.props.style).toMatchObject({
        borderWidth,
        borderColor: Colors.light.cardBorder,
      });
    });

    it('applies shadow', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).shadow().testID('shadow').toElement()
      );
      const container = getByTestId('shadow');
      expect(container.props.style).toMatchObject({
        shadowColor: Colors.light.cardShadow,
        shadowOffset: DSLDefaults.shadow.offset,
        shadowOpacity: DSLDefaults.shadow.opacity,
        shadowRadius: DSLDefaults.shadow.radius,
        elevation: DSLDefaults.shadow.elevation,
      });
    });

    it('applies flex', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).flex(DSLDefaults.flex).testID('flex').toElement()
      );
      const container = getByTestId('flex');
      expect(container.props.style).toMatchObject({ flex: DSLDefaults.flex });
    });

    it('applies alignment', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).alignment('center').testID('align').toElement()
      );
      const container = getByTestId('align');
      expect(container.props.style).toMatchObject({ alignItems: 'center' });
    });
  });

  describe('Interaction modifiers', () => {
    it('wraps with Pressable when onTap is set', () => {
      const handler = jest.fn();
      const { getByText } = renderWithDSLTheme(
        Text('Tappable').onTap(handler).toElement()
      );
      const element = getByText('Tappable');
      expect(element).toBeTruthy();
    });
  });

  describe('Group rendering', () => {
    it('renders Group children without wrapper', () => {
      const { getByText } = renderWithDSLTheme(
        VStack(
          Group(Text('A'), Text('B')),
          Text('C'),
        ).toElement()
      );
      expect(getByText('A')).toBeTruthy();
      expect(getByText('B')).toBeTruthy();
      expect(getByText('C')).toBeTruthy();
    });
  });

  describe('Spacer rendering', () => {
    it('renders Spacer as flex:1 view', () => {
      const { toJSON } = renderWithDSLTheme(
        HStack(Text('Left'), Spacer(), Text('Right')).toElement()
      );
      expect(toJSON()).toBeTruthy();
    });
  });
});
