import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { ReactNode, useEffect, useState } from 'react';
import { StyleProp } from 'react-native';

export type CheckBoxProps = {
  children: ReactNode;
  onChange?: (isEnable: boolean) => void;
  style?: StyleProp<ViewStyle>;
};

export function CheckBox({ children, onChange, style }: CheckBoxProps) {
  const [enable, setEnable] = useState<boolean>(false);

  useEffect(() => {
    if (onChange) onChange(enable);
  }, [enable]);

  return (
    <TouchableOpacity
      onPress={() => {
        setEnable(!enable);
      }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
      }}
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

      <View style={[{ flex: 1 }, style]}>{children}</View>
    </TouchableOpacity>
  );
}
