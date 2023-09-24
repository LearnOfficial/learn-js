import { Pressable, Text } from 'react-native';

export type NavItemProps = {
  active?: boolean;
  onPress?: () => void;
  title: string;
};

export function NavItem({ title, onPress, active }: NavItemProps) {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={{
          backgroundColor: active ? 'black' : 'white',
          color: active ? 'white' : '#70687E',
          fontWeight: 'bold',
          padding: 8,
          borderRadius: 100,
          fontSize: 12,
          fontFamily: 'lexend'
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
