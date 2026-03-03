import { ViewBuilder } from '../Core/ViewBuilder';

export function Text(content: string): ViewBuilder {
  return new ViewBuilder('text', { text: content });
}
