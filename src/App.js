import { SafeAreaView } from 'react-native'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { styles } from './style';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
