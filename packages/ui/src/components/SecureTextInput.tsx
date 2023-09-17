import { useState } from 'react';
import { StyleProp, TextInput as TextInputRN, TextStyle } from 'react-native';

export type SecureTextInputProps = {
  placeholder: string;
  inputRef: React.MutableRefObject<string>;
  style?: StyleProp<TextStyle>;
};

export default function SecureTextInput({
  placeholder,
  inputRef,
  style
}: SecureTextInputProps) {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  return (
    <TextInputRN
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
      secureTextEntry
    />
  );
}
