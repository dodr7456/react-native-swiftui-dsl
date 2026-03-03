import { ViewBuilder } from '../Core/ViewBuilder';
import type { ImageSourcePropType } from 'react-native';

export type ImageSource = ImageSourcePropType | { uri: string };

export function Image(
  source: ImageSource,
  options?: { resizeMode?: 'cover' | 'contain' | 'stretch' | 'center'; alt?: string },
): ViewBuilder {
  return new ViewBuilder('image', {
    imageSource: source,
    resizeMode: options?.resizeMode,
    imageAlt: options?.alt,
  });
}
