import { ColorValue, Pressable, Text, View } from 'react-native';

export type SubjectItemProps = {
  title: string;
  backgroundColor: ColorValue;
};

export function SubjectItem({ title, backgroundColor }: SubjectItemProps) {
  return (
    <Pressable
      style={{
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: backgroundColor,
        borderRadius: 100
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'lexend', color: '#70687E' }}>{title}</Text>
      </View>
    </Pressable>
  );
}
