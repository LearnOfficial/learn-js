import {
  TextInput as RNTextInput,
  StyleProp,
  TextStyle,
  TouchableOpacity
} from 'react-native';
import { i18n } from '../../i18n';
import { View } from 'react-native';
import OpenEyeIcon from '../../static/icons/OpenEyeIcon';
import { useState } from 'react';
import CloseEyeIcon from '../../static/icons/CloseEyeIcon';
export type SecureTextInputProps = {
  placeholderT?: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
};
export function SecureTextInput({
  placeholder,
  placeholderT,
  style
}: SecureTextInputProps) {
  const [isHidenPassword, setIsHidePassword] = useState<boolean>(true);
  if (placeholderT) {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderWidth: 1,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <RNTextInput
          style={[
            {
              fontFamily: 'Lexend',
              width: '100%'
            },
            style
          ]}
          placeholder={i18n.t(placeholderT)}
          secureTextEntry={isHidenPassword}
        />

        <TouchableOpacity
          onPress={() => {
            setIsHidePassword(!isHidenPassword);
          }}
        >
          {isHidenPassword ? (
            <OpenEyeIcon width={20} height={20} color="#B8B8B8" />
          ) : (
            <CloseEyeIcon width={20} height={20} color="#B8B8B8" />
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return <RNTextInput placeholder={placeholder} />;
}
