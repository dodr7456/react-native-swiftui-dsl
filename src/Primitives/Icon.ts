import { ViewBuilder } from '../Core/ViewBuilder';
import { ColorValue } from '../Core/ThemeResolver';

export function Icon(
  name: string,
  options?: { size?: number; color?: ColorValue },
): ViewBuilder {
  return new ViewBuilder('icon', {
    iconName: name,
    iconSize: options?.size,
    iconColor: options?.color,
  });
}
