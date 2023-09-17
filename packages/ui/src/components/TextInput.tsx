import { useState } from 'react';
import { TextInput as RNTextInput, StyleProp, TextStyle } from 'react-native';

export type TextInputProps = {
  placeholder: string;
  inputRef: React.MutableRefObject<string>;
  style?: StyleProp<TextStyle>;
};

export default function TextInput({
  placeholder,
  inputRef,
  style
}: TextInputProps) {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  return (
    <RNTextInput
      onFocus={() => {
        setOnFocus(true);
      }}
      onBlur={() => {
        setOnFocus(false);
      }}
      style={[
        {
          padding: 10,
          borderWidth: onFocus ? 1 : 2,
          borderColor: onFocus ? 'black' : 'grey',
          color: onFocus ? 'black' : 'grey',
          width: '100%'
        },
        style
      ]}
      onChangeText={(input) => (inputRef.current = input)}
      placeholder={placeholder}
    />
  );
}
