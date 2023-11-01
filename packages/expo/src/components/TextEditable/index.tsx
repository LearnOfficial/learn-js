import { ReactNode, useRef, useState } from 'react';
import {
  TextInput as RNTextInput,
  Text as RNText,
  TextStyle,
  StyleSheet,
  StyleProp,
  LayoutChangeEvent,
  TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';
import { i18n } from '../../i18n';

export type TextEditableProps = {
  children?: ReactNode;
  t?: string;
  style?: StyleProp<TextStyle>;
};

export function TextEditable({ children, t, style }: TextEditableProps) {
  const [isMeasured, setIsMesuared] = useState<boolean>(false);
  const [isEditable, setEditable] = useState<boolean>(false);
  const textContentRef = useRef(t ? i18n.t(t) : children ?? 'Text Editable');

  const doublePressed = useRef<number>(0);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const locale = useSelector((state) => state.settingsSliceReducer.locale);

  const onLayout = (e: LayoutChangeEvent) => {
    widthRef.current = e.nativeEvent.layout.width;
    heightRef.current = e.nativeEvent.layout.height;
    setIsMesuared(true);
  };

  if (!isMeasured && !isEditable) {
    return (
      <RNText
        onLayout={onLayout}
        style={[styles.lexend, style, { position: 'absolute', opacity: 0 }]}
      >
        {textContentRef.current}
      </RNText>
    );
  }

  const customStyle: TextStyle = {
    ...style,
    width: widthRef.current,
    height: heightRef.current
  };

  if (isEditable) {
    return (
      <RNTextInput
        onSubmitEditing={() => {
          setEditable(false);
          setIsMesuared(false);
        }}
        onChangeText={(text) => {
          textContentRef.current = text;
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
