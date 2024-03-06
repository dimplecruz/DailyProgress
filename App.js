import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";


// Import screens from the "screens" folder
import Bottomtabs from "./components/bottomtabs";
import Startpage from './Screens/startpage';
import store from "./store";
import Addnewhabit from './Screens/addnewhabit';
import Homelist from './Screens/homelist';
import Addhabit from './Screens/addhabit';
import Habitlist from './Screens/habitlist';


const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="startpage">
      <Stack.Screen
          name="bottomtabs"
          component={Bottomtabs}
          options={{ title: " ", headerShown: false }}
        />
        <Stack.Screen
          name="startpage"
          component={Startpage}
          options={{ title: " ", headerShown: false }}
        />
        <Stack.Screen
          name="addnewhabit"
          component={Addnewhabit}
          options={{ title: " ", headerShown: false }}
        />
        <Stack.Screen
          name="homelist"
          component={Homelist}
          options={{ title: " ", headerShown: false }}
        />

         <Stack.Screen
          name="addhabit"
          component={Addhabit}
          options={{ title: " ", headerShown: false }}
        />
         <Stack.Screen
          name="habitlist"
          component={Habitlist}
          options={{ title: " ", headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
