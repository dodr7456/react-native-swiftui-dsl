import React from 'react';
import { TextInput } from '../../src/Primitives/TextInput';
import { createBinding } from '../../src/Binding/Binding';
import { renderWithDSLTheme } from '../Helpers/renderWithDSLTheme';

describe('TextInput', () => {
  const mockUpdate = jest.fn();
  const binding = createBinding<string>('hello', mockUpdate);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a textinput element type', () => {
    const builder = TextInput(binding);
    expect(builder.elementType).toBe('textinput');
  });

  it('stores binding in props', () => {
    const builder = TextInput(binding);
    expect(builder.props.binding).toBe(binding);
  });

  it('renders without crashing', () => {
    const { toJSON } = renderWithDSLTheme(
      TextInput(binding).toElement()
    );
    expect(toJSON()).toBeTruthy();
  });

  it('applies placeholder modifier', () => {
    const builder = TextInput(binding).placeholder('Enter text');
    expect(builder.modifiers).toContainEqual({
      type: 'placeholder',
      value: 'Enter text',
    });
  });

  it('applies inputLabel modifier', () => {
    const builder = TextInput(binding).inputLabel('Name');
    expect(builder.modifiers).toContainEqual({
      type: 'inputLabel',
      text: 'Name',
    });
  });

  it('renders with label', () => {
    const { getByText } = renderWithDSLTheme(
      TextInput(binding).inputLabel('Email').toElement()
    );
    expect(getByText('Email')).toBeTruthy();
  });

  it('applies inputError modifier', () => {
    const builder = TextInput(binding).inputError('Required');
    expect(builder.modifiers).toContainEqual({
      type: 'inputError',
      message: 'Required',
    });
  });

  it('renders with error', () => {
    const { getByText } = renderWithDSLTheme(
      TextInput(binding).inputLabel('Field').inputError('Required').toElement()
    );
    expect(getByText('Required')).toBeTruthy();
  });

  it('applies keyboardType modifier', () => {
    const builder = TextInput(binding).keyboardType('email-address');
    expect(builder.modifiers).toContainEqual({
      type: 'keyboardType',
      value: 'email-address',
    });
  });

  it('applies multiline modifier', () => {
    const builder = TextInput(binding).multiline(4);
    expect(builder.modifiers).toContainEqual({
      type: 'multiline',
      lines: 4,
    });
  });

  it('applies secureEntry modifier', () => {
    const builder = TextInput(binding).secureEntry();
    expect(builder.modifiers).toContainEqual({ type: 'secureEntry' });
  });

  it('applies testID modifier', () => {
    const builder = TextInput(binding).testID('input-field');
    expect(builder.modifiers).toContainEqual({ type: 'testID', value: 'input-field' });
  });

  it('applies maxLength modifier', () => {
    const builder = TextInput(binding).maxLength(50);
    expect(builder.modifiers).toContainEqual({ type: 'maxLength', value: 50 });
  });
});
