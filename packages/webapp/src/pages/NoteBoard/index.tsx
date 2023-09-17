import { Button, useAuth } from '@learn/ui';
import { Text, View } from 'react-native';

export function NoteBoard() {
  const { logOut } = useAuth();
  return (
    <View>
      <Text>NoteBoard Page</Text>
      <Button
        title="Log Out"
        onPress={() => {
          logOut();
        }}
      />
    </View>
  );
}
