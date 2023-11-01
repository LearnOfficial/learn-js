import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type LinkProps = {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function Link({ children, onPress, style }: LinkProps) {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
