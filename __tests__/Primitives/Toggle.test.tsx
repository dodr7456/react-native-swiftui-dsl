import React from 'react';
import { Toggle } from '../../src/Primitives/Toggle';
import { createBinding } from '../../src/Binding/Binding';
import { renderWithDSLTheme } from '../Helpers/renderWithDSLTheme';

describe('Toggle', () => {
  const mockUpdate = jest.fn();
  const binding = createBinding<boolean>(true, mockUpdate);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a toggle element type', () => {
    const builder = Toggle(binding);
    expect(builder.elementType).toBe('toggle');
  });

  it('stores binding in props', () => {
    const builder = Toggle(binding);
    expect(builder.props.toggleBinding).toBe(binding);
  });

  it('renders without crashing', () => {
    const { toJSON } = renderWithDSLTheme(
      Toggle(binding).testID('toggle').toElement()
    );
    expect(toJSON()).toBeTruthy();
  });

  it('stores custom track color', () => {
    const builder = Toggle(binding, { trackColor: 'tint' });
    expect(builder.props.toggleTrackColor).toBe('tint');
  });

  it('stores custom thumb color', () => {
    const builder = Toggle(binding, { thumbColor: 'card' });
    expect(builder.props.toggleThumbColor).toBe('card');
  });

  it('applies disabled modifier', () => {
    const builder = Toggle(binding).disabled();
    expect(builder.modifiers).toContainEqual({ type: 'disabled', value: true });
  });

  it('applies testID modifier', () => {
    const builder = Toggle(binding).testID('my-toggle');
    expect(builder.modifiers).toContainEqual({ type: 'testID', value: 'my-toggle' });
  });
});
