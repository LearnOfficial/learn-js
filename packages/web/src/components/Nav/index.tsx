import { ReactNode } from 'react';
import { View } from 'react-native';

export type NavProps = {
  children: ReactNode;
};

export function Nav({ children }: NavProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
        borderRadius: 25,
        borderWidth: 2,
        gap: 20
      }}
    >
      {children}
    </View>
  );
}
