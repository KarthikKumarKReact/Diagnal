import { SafeAreaView } from 'react-native'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { styles } from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator
          initialRouteName="homescreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="homescreen"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
