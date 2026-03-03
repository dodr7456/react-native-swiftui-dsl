import { ViewBuilder } from '../Core/ViewBuilder';
import { Binding } from '../Binding/Binding';

export function TextInput(binding: Binding<string>): ViewBuilder {
  return new ViewBuilder('textinput', { binding });
}
