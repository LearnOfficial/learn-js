import { LearnLogo } from '@learn/ui'
import { View } from 'react-native'

function App(): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LearnLogo size={250} />
    </View>
  )
}

export default App
