import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  TextInput as RNTextInput,
  Text as RNText,
  TextStyle,
  StyleSheet,
  StyleProp,
  LayoutChangeEvent,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import { useSelector } from 'react-redux';
import { i18n } from '../../i18n';

export type TextAreaProps = {
  children?: ReactNode;
  t?: string;
  style?: StyleProp<TextStyle>;
};

export function TextArea({ children, t, style }: TextAreaProps) {
  const [isEditable, setEditable] = useState<boolean>(false);
  const textContentRef = useRef(t ? i18n.t(t) : children ?? 'Text Editable');

  const doublePressed = useRef<number>(0);
  const locale = useSelector((state) => state.settingsSliceReducer.locale);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setEditable(false);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const customStyle: TextStyle = {
    ...style
  };

  if (isEditable) {
    return (
      <RNTextInput
        multiline
        editable
        onEndEditing={() => {
          console.log('end editing...');
        }}
        onChangeText={(text) => {
          textContentRef.current = text;
        }}
        onBlur={() => {
          setEditable(false);
        }}
        style={[customStyle]}
      >
        {textContentRef.current}
      </RNTextInput>
    );
  }

  return (
    <TouchableOpacity
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
      <RNText style={[customStyle, styles.lexend, style]}>
        {textContentRef.current}
      </RNText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  lexend: {
    fontFamily: 'Lexend'
  }
});
