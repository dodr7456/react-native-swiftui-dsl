import { ViewBuilder, DSLChild } from '../Core/ViewBuilder';

export function VStack(...children: DSLChild[]): ViewBuilder {
  return new ViewBuilder('vstack', {}, children);
}

export function HStack(...children: DSLChild[]): ViewBuilder {
  return new ViewBuilder('hstack', {}, children);
}

export function ZStack(...children: DSLChild[]): ViewBuilder {
  return new ViewBuilder('zstack', {}, children);
}
