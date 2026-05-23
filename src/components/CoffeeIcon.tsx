import React, { ComponentProps } from 'react';
import { Lucide } from '@react-native-vector-icons/lucide/static';

type CoffeeIconProps = {
  name: ComponentProps<typeof Lucide>['name'];
  size: number;
  color: string;
};

export function CoffeeIcon({ name, size, color }: CoffeeIconProps) {
  return <Lucide name={name} size={size} color={color} />;
}
