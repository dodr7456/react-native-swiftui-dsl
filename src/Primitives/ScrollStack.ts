import { ViewBuilder, DSLChild } from '../Core/ViewBuilder';

export function ScrollStack(...children: DSLChild[]): ViewBuilder {
  return new ViewBuilder('scroll', {}, children);
}
