import { Button, LearnLogo, TextInput } from '@learn/ui'
import { useState } from 'react'
import { Text, View } from 'react-native'

function App(): JSX.Element {
  const [username, setUsername] = useState<string>('')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LearnLogo size={250} />
      <TextInput placeholder="hello world" inputText={username} setInputText={setUsername} />
      <Text>{username}</Text>
      <Button title="Hello world" />
    </View>
  )
}

export default App
