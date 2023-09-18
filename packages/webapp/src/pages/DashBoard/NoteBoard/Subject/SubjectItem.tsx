import { TextInput } from '@learn/ui';
import { useRef, useState } from 'react';
import { ColorValue, Pressable, Text, View } from 'react-native';

export type SubjectItemProps = {
  title: string;
  backgroundColor: ColorValue;
};

export function SubjectItem({ title, backgroundColor }: SubjectItemProps) {
  const doublePressed = useRef<number>(0);
  const [editable, setEditable] = useState<boolean>(false);
  const inputRef = useRef<string>(title);

  return (
    <Pressable
      style={{
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: backgroundColor,
        borderRadius: 100
      }}
      onPress={() => {
        setTimeout(() => {
          doublePressed.current = 0;
        }, 500);
        doublePressed.current += 1;
        if (doublePressed.current == 2) {
          setEditable(true);
          doublePressed.current = 0;
        }
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {editable ? (
          <TextInput
            style={{
              padding: 0,
              borderWidth: 0,
              fontFamily: 'lexend',
              color: '#70687E'
            }}
            placeholder=""
            inputRef={inputRef}
            onSubmitEditing={() => {
              setEditable(false);
            }}
          />
        ) : (
          <Text style={{ fontFamily: 'lexend', color: '#70687E' }}>
            {inputRef.current}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
