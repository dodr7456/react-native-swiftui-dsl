import { ViewBuilder } from '../Core/ViewBuilder';

export type ButtonStyle = 'filled' | 'outlined' | 'plain';

export function Button(
  title: string,
  action: () => void,
  options?: { style?: ButtonStyle; icon?: string },
): ViewBuilder {
  return new ViewBuilder('button', {
    buttonTitle: title,
    buttonAction: action,
    buttonStyle: options?.style ?? 'filled',
    buttonIcon: options?.icon,
  });
}
