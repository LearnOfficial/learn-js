import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  StyleProp,
  TextInputSubmitEditingEventData,
  TextStyle
} from 'react-native';

export type TextInputProps = {
  placeholder: string;
  inputRef: React.MutableRefObject<string>;
  style?: StyleProp<TextStyle>;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
};

export default function TextInput({
  placeholder,
  inputRef,
  style,
  onSubmitEditing
}: TextInputProps) {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  return (
    <RNTextInput
      defaultValue={inputRef.current}
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
          color: onFocus ? 'black' : 'grey'
        },
        style
      ]}
      onChangeText={(input) => (inputRef.current = input)}
      onSubmitEditing={onSubmitEditing}
      placeholder={placeholder}
    />
  );
}
