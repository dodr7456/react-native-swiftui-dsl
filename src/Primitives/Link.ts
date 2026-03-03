import { ViewBuilder } from '../Core/ViewBuilder';

export function Link(title: string, url: string): ViewBuilder {
  return new ViewBuilder('link', {
    text: title,
    linkURL: url,
  });
}
