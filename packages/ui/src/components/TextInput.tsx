import { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';

export type TextInputProps = {
  placeholder: string;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export default function TextInput({
  placeholder,
  inputText,
  setInputText
}: TextInputProps) {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  return (
    <RNTextInput
      value={inputText}
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
      onChangeText={setInputText}
      placeholder={placeholder}
    />
  );
}
