import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';

export type ButtonProps = {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
export default function Button({ title, onPress, style }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          width: '100%',
          backgroundColor: 'black',
          padding: 10
        },
        style
      ]}
    >
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
