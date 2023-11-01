import { ReactNode } from 'react';
import { Text as RNText, TextStyle, StyleSheet, StyleProp } from 'react-native';
import { useSelector } from 'react-redux';
import { i18n } from '../../i18n';

export type Text = {
  children?: ReactNode;
  t?: string;
  style?: StyleProp<TextStyle>;
};

export function Text({ children, t, style }: Text) {
  const locale = useSelector((state) => state.settingsSliceReducer.locale);

  if (t) {
    return <RNText style={[styles.lexend, style]}>{i18n.t(t)}</RNText>;
  }

  return <RNText style={[styles.lexend, style]}>{children}</RNText>;
}

const styles = StyleSheet.create({
  lexend: {
    fontFamily: 'Lexend'
  }
});
