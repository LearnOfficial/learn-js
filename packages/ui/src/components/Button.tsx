import { Text, TouchableOpacity } from 'react-native';

export type ButtonProps = {
  title: string;
  onPress?: () => void;
};
export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        backgroundColor: 'black',
        padding: 10
      }}
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
    </TouchableOpacity>
  );
}
