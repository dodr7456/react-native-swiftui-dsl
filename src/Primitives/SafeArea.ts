import { ViewBuilder, DSLChild } from '../Core/ViewBuilder';

export function SafeArea(...children: DSLChild[]): ViewBuilder {
  return new ViewBuilder('safearea', {}, children);
}
