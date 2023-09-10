import { useState } from 'react';
import { TextInput as TextInputRN } from 'react-native';

export type SecureTextInputProps = {
  placeholder: string;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SecureTextInput({
  placeholder,
  inputText,
  setInputText
}: SecureTextInputProps) {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  return (
    <TextInputRN
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
      secureTextEntry
    />
  );
}
