import React from 'react';
import { Text } from '../../src/Primitives/Text';
import { VStack, HStack } from '../../src/Primitives/Containers';
import { Image } from '../../src/Primitives/Image';
import { Toggle } from '../../src/Primitives/Toggle';
import { Button } from '../../src/Primitives/Button';
import { Divider } from '../../src/Primitives/Divider';
import { Link } from '../../src/Primitives/Link';
import { createBinding } from '../../src/Binding/Binding';
import { renderWithDSLTheme, testThemeConfig } from '../Helpers/renderWithDSLTheme';

const Colors = testThemeConfig.colors;
const Layout = testThemeConfig.layout;

describe('DSLRenderer - New Modifiers', () => {
  describe('Position modifiers', () => {
    it('applies position absolute', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).position('absolute').testID('pos').toElement()
      );
      const el = getByTestId('pos');
      expect(el.props.style).toMatchObject({ position: 'absolute' });
    });

    it('applies position edges', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).positionEdges({ top: 0, left: 10 }).testID('edges').toElement()
      );
      const el = getByTestId('edges');
      expect(el.props.style).toMatchObject({ top: 0, left: 10 });
    });

    it('applies zIndex', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).zIndex(5).testID('z').toElement()
      );
      const el = getByTestId('z');
      expect(el.props.style).toMatchObject({ zIndex: 5 });
    });

    it('applies overflow hidden', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).overflow('hidden').testID('ovf').toElement()
      );
      const el = getByTestId('ovf');
      expect(el.props.style).toMatchObject({ overflow: 'hidden' });
    });

    it('applies aspectRatio', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).aspectRatio(1.5).testID('ar').toElement()
      );
      const el = getByTestId('ar');
      expect(el.props.style).toMatchObject({ aspectRatio: 1.5 });
    });

    it('applies alignSelf center', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).alignSelf('center').testID('as').toElement()
      );
      const el = getByTestId('as');
      expect(el.props.style).toMatchObject({ alignSelf: 'center' });
    });

    it('applies display none', () => {
      const { toJSON } = renderWithDSLTheme(
        VStack(Text('X')).display('none').testID('disp').toElement()
      );
      const tree = toJSON();
      expect(tree.props.style).toMatchObject({ display: 'none' });
      expect(tree.props.testID).toBe('disp');
    });

    it('applies hidden modifier', () => {
      const { toJSON } = renderWithDSLTheme(
        VStack(Text('X')).hidden().testID('hide').toElement()
      );
      const tree = toJSON();
      expect(tree.props.style).toMatchObject({ display: 'none' });
      expect(tree.props.testID).toBe('hide');
    });
  });

  describe('Text modifiers', () => {
    it('applies textDecoration underline', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Underlined').underline().toElement()
      );
      const el = getByText('Underlined');
      expect(el.props.style).toMatchObject({
        textDecorationLine: 'underline',
      });
    });

    it('applies textDecoration strikethrough', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Struck').strikethrough().toElement()
      );
      const el = getByText('Struck');
      expect(el.props.style).toMatchObject({
        textDecorationLine: 'line-through',
      });
    });

    it('applies italic', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Italic').italic().toElement()
      );
      const el = getByText('Italic');
      expect(el.props.style).toMatchObject({
        fontStyle: 'italic',
      });
    });

    it('applies fontFamily', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Custom').fontFamily('Courier').toElement()
      );
      const el = getByText('Custom');
      expect(el.props.style).toMatchObject({
        fontFamily: 'Courier',
      });
    });
  });

  describe('Interaction modifiers', () => {
    it('wraps with Pressable for onLongPress', () => {
      const handler = jest.fn();
      const { getByText } = renderWithDSLTheme(
        Text('LongPressable').onLongPress(handler).toElement()
      );
      expect(getByText('LongPressable')).toBeTruthy();
    });
  });

  describe('Accessibility modifiers', () => {
    it('applies accessibilityRole to text', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Heading').accessibilityRole('header').toElement()
      );
      const el = getByText('Heading');
      expect(el.props.accessibilityRole).toBe('header');
    });

    it('applies accessibilityHint to text', () => {
      const { getByText } = renderWithDSLTheme(
        Text('Tap me').accessibilityHint('Opens settings').toElement()
      );
      const el = getByText('Tap me');
      expect(el.props.accessibilityHint).toBe('Opens settings');
    });

    it('applies accessibilityRole to container', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).accessibilityRole('button').testID('ar-cont').toElement()
      );
      const el = getByTestId('ar-cont');
      expect(el.props.accessibilityRole).toBe('button');
    });

    it('applies accessibilityHint to container', () => {
      const { getByTestId } = renderWithDSLTheme(
        VStack(Text('X')).accessibilityHint('Navigates').testID('ah-cont').toElement()
      );
      const el = getByTestId('ah-cont');
      expect(el.props.accessibilityHint).toBe('Navigates');
    });
  });

  describe('New element rendering', () => {
    it('renders Image element', () => {
      const { toJSON } = renderWithDSLTheme(
        Image({ uri: 'https://example.com/img.png' }).testID('img').toElement()
      );
      expect(toJSON()).toBeTruthy();
    });

    it('renders Toggle element', () => {
      const binding = createBinding<boolean>(true, jest.fn());
      const { toJSON } = renderWithDSLTheme(
        Toggle(binding).testID('toggle').toElement()
      );
      expect(toJSON()).toBeTruthy();
    });

    it('renders Button with filled style', () => {
      const action = jest.fn();
      const { getByText } = renderWithDSLTheme(
        Button('Submit', action).toElement()
      );
      expect(getByText('Submit')).toBeTruthy();
    });

    it('renders Button with outlined style', () => {
      const action = jest.fn();
      const { getByText } = renderWithDSLTheme(
        Button('Cancel', action, { style: 'outlined' }).toElement()
      );
      expect(getByText('Cancel')).toBeTruthy();
    });

    it('renders Button with plain style', () => {
      const action = jest.fn();
      const { getByText } = renderWithDSLTheme(
        Button('Skip', action, { style: 'plain' }).toElement()
      );
      expect(getByText('Skip')).toBeTruthy();
    });

    it('renders Button with icon', () => {
      const action = jest.fn();
      const { getByText } = renderWithDSLTheme(
        Button('Save', action, { icon: 'save' }).toElement()
      );
      expect(getByText('Save')).toBeTruthy();
    });

    it('renders Divider', () => {
      const { toJSON } = renderWithDSLTheme(
        Divider().testID('div').toElement()
      );
      expect(toJSON()).toBeTruthy();
    });

    it('renders Link', () => {
      const { getByText } = renderWithDSLTheme(
        Link('Visit', 'https://example.com').toElement()
      );
      expect(getByText('Visit')).toBeTruthy();
    });

    it('renders Divider with custom color', () => {
      const { toJSON } = renderWithDSLTheme(
        Divider().foregroundColor('error').testID('div-colored').toElement()
      );
      expect(toJSON()).toBeTruthy();
    });
  });
});
