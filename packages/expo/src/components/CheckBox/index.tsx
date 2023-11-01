import { TouchableOpacity, View } from 'react-native';
import { Text } from '../Text';
import { useEffect, useState } from 'react';

export type CheckBoxProps = {
  t: string;
  onChange?: (isEnable: boolean) => void;
};

export function CheckBox({ t, onChange }: CheckBoxProps) {
  const [enable, setEnable] = useState<boolean>(false);

  useEffect(() => {
    if (onChange) onChange(enable);
  }, [enable]);

  return (
    <TouchableOpacity
      onPress={() => {
        setEnable(!enable);
      }}
      style={{ flexDirection: 'row', gap: 10 }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          padding: 2,
          borderWidth: 1,
          borderRadius: 5
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: enable ? '#1E1E1E' : '#F9FBF4',
            borderRadius: 2
          }}
        ></View>
      </View>
      <Text t={t} />
    </TouchableOpacity>
  );
}
