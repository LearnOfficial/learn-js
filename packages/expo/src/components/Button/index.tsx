import { TouchableOpacity, ViewStyle } from 'react-native';
import { Text } from '../Text';
import { StyleProp } from 'react-native';

export type ButtonProps = {
  title?: string;
  t?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function Button({ t, title, style, onPress }: ButtonProps) {
  let TextContent = () => <Text style={{ textAlign: 'center' }}>Button</Text>;

  if (t) {
    TextContent = () => <Text style={{ textAlign: 'center' }} t={t} />;
  } else if (title) {
    TextContent = () => <Text>{title}</Text>;
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
