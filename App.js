import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Searching from './views/Searching';
import Home from './views/Home';
import store from "./redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (<Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Searching" component={Searching} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}
