import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContextProvider } from './app/context/AuthContext';
import Navigation from './app/navigation/Navigation';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.appjsContainer}>
      <AuthContextProvider>
      <Navigation/>
      </AuthContextProvider>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  appjsContainer: {
    flex: 1,
    backgroundColor: "#F8F993",
  }
})
