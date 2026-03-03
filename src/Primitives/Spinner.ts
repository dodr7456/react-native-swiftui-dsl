import { ViewBuilder } from '../Core/ViewBuilder';

export function Spinner(size: 'small' | 'large' = 'large'): ViewBuilder {
  return new ViewBuilder('spinner', { spinnerSize: size });
}
