import { ReactNode } from 'react';
import { Text, View } from 'react-native';

export type SubjectContainerProps = {
  children: ReactNode;
};

export function SubjectContainer({ children }: SubjectContainerProps) {
  return (
    <View style={{ gap: 20 }}>
      <Text
        style={{
          fontFamily: 'lexend',
          fontSize: 20,
          fontWeight: '100'
        }}
      >
        Subjects
      </Text>
      {children}
    </View>
  );
}
