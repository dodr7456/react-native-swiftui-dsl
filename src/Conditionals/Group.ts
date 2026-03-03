import { ViewBuilder, DSLChild } from '../Core/ViewBuilder';

export function Group(...children: DSLChild[]): ViewBuilder {
  return new ViewBuilder('fragment', {}, children);
}
