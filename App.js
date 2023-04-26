import { StyleSheet, SafeAreaView } from 'react-native';
import { AuthContextProvider } from './app/context/AuthContext';
import { TaskProvider } from "./app/context/TaskContext";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from './app/navigation/BottomNavigatiom';

export default function App() {


  return (
    <SafeAreaView style={styles.appjsContainer}>
      <AuthContextProvider>
        <TaskProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </TaskProvider>
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
