import {
  ColorValue,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { Text } from '../Text';
import { StyleProp } from 'react-native';

export type ButtonProps = {
  title?: string;
  t?: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  onPress?: () => void;
};

export function Button({ t, title, style, onPress, styleText }: ButtonProps) {
  let TextContent = () => (
    <Text style={[{ textAlign: 'center' }, styleText]}>Button</Text>
  );

  if (t) {
    TextContent = () => (
      <Text style={[{ textAlign: 'center' }, styleText]} t={t} />
    );
  } else if (title) {
    TextContent = () => <Text style={[styleText]}>{title}</Text>;
  }

  return (
    <TouchableOpacity
      style={[{ flex: 1, padding: 10 }, style]}
      onPress={onPress}
    >
      <TextContent />
    </TouchableOpacity>
  );
}
