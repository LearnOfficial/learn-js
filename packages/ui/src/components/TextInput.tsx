import { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';

export type TextInputProps = {
  placeholder: string;
  inputRef: React.MutableRefObject<string>;
};

export default function TextInput({ placeholder, inputRef }: TextInputProps) {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  return (
    <RNTextInput
      onFocus={() => {
        setOnFocus(true);
      }}
      onBlur={() => {
        setOnFocus(false);
      }}
      style={{
        padding: 10,
        borderWidth: onFocus ? 1 : 2,
        borderColor: onFocus ? 'black' : 'grey',
        color: onFocus ? 'black' : 'grey',
        width: '100%'
      }}
      onChangeText={(input) => (inputRef.current = input)}
      placeholder={placeholder}
    />
  );
}
