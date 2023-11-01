import { ReactNode, useRef, useState } from 'react';
import {
  Text as RNText,
  TextStyle,
  StyleSheet,
  StyleProp,
  LayoutChangeEvent
} from 'react-native';
import { useSelector } from 'react-redux';
import { i18n } from '../../i18n';

export type TextAdjustProps = {
  children?: ReactNode;
  t?: string;
  style?: StyleProp<TextStyle>;
};

export function TextAdjust({ children, t, style }: TextAdjustProps) {
  const locale = useSelector((state) => state.settingsSliceReducer.locale);

  const [isMeasured, setIsMesuared] = useState<boolean>(false);
  const textContentRef = useRef(t ? i18n.t(t) : children ?? 'Text Editable');

  const widthRef = useRef(0);
  const heightRef = useRef(0);

  const onLayout = (e: LayoutChangeEvent) => {
    widthRef.current = e.nativeEvent.layout.width;
    heightRef.current = e.nativeEvent.layout.height;
    setIsMesuared(true);
  };

  if (!isMeasured) {
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

  return (
    <RNText style={[customStyle, styles.lexend, style]}>
      {textContentRef.current}
    </RNText>
  );
}

const styles = StyleSheet.create({
  lexend: {
    fontFamily: 'Lexend'
  }
});
