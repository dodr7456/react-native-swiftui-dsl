import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { Button } from '../../src/Primitives/Button';
import { DSLDefaults } from '../../src/Config/Defaults';
import { renderWithDSLTheme, testThemeConfig } from '../Helpers/renderWithDSLTheme';

const Colors = testThemeConfig.colors;

describe('Button', () => {
  const mockAction = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a button element type', () => {
    const builder = Button('Tap Me', mockAction);
    expect(builder.elementType).toBe('button');
  });

  it('stores button props', () => {
    const builder = Button('Tap Me', mockAction, { style: 'outlined', icon: 'star' });
    expect(builder.props.buttonTitle).toBe('Tap Me');
    expect(builder.props.buttonAction).toBe(mockAction);
    expect(builder.props.buttonStyle).toBe('outlined');
    expect(builder.props.buttonIcon).toBe('star');
  });

  it('defaults to filled style', () => {
    const builder = Button('Tap Me', mockAction);
    expect(builder.props.buttonStyle).toBe('filled');
  });

  it('renders button text', () => {
    const { getByText } = renderWithDSLTheme(
      Button('Press Here', mockAction).toElement()
    );
    expect(getByText('Press Here')).toBeTruthy();
  });

  it('calls action on press', () => {
    const { getByText } = renderWithDSLTheme(
      Button('Click', mockAction).toElement()
    );
    fireEvent.press(getByText('Click'));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  it('renders with icon', () => {
    const { toJSON } = renderWithDSLTheme(
      Button('With Icon', mockAction, { icon: 'plus' }).toElement()
    );
    expect(toJSON()).toBeTruthy();
  });

  it('applies disabled modifier', () => {
    const builder = Button('Disabled', mockAction).disabled();
    expect(builder.modifiers).toContainEqual({ type: 'disabled', value: true });
  });

  it('applies testID', () => {
    const { getByTestId } = renderWithDSLTheme(
      Button('Test', mockAction).testID('my-btn').toElement()
    );
    expect(getByTestId('my-btn')).toBeTruthy();
  });

  it('renders outlined style', () => {
    const { getByText } = renderWithDSLTheme(
      Button('Outlined', mockAction, { style: 'outlined' }).toElement()
    );
    expect(getByText('Outlined')).toBeTruthy();
  });

  it('renders plain style', () => {
    const { getByText } = renderWithDSLTheme(
      Button('Plain', mockAction, { style: 'plain' }).toElement()
    );
    expect(getByText('Plain')).toBeTruthy();
  });
});
