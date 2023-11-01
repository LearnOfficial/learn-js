import { TextInput as RNTextInput, StyleProp, TextStyle } from 'react-native';
import { i18n } from '../../i18n';
export type TextInputProps = {
  placeholderT?: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
};
export function TextInput({
  placeholder,
  placeholderT,
  style
}: TextInputProps) {
  if (placeholderT) {
    return (
      <RNTextInput
        style={[
          {
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontFamily: 'Lexend'
          },
          style
        ]}
        placeholder={i18n.t(placeholderT)}
      />
    );
  }

  return <RNTextInput placeholder={placeholder} />;
}
