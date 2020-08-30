import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/HomeScreen";
import SignInScreen from "./app/components/SignInScreen";
import SignUpScreen from "./app/components/SignUpScreen";
import { BasketScreen } from "./app/screens/Basket/BasketScreen";
import { BottomNavigation } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./app/components/SettingsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { YellowBox } from 'react-native';


    YellowBox.ignoreWarnings(['Setting a timer']);


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Basket" component={BasketScreen} />
      <Tab.Screen name="Settings" component={BasketScreen} />
      <Tab.Screen name="Profile" component={BasketScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "basket", title: "Basket", icon: "cart" },
    { key: "settins", title: "Settins", icon: "cog" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    albums: BasketScreen,
    settings: SettingsScreen,
  });
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>

    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: "Welcome" }}
    //     /><Stack.Screen name="Basket" component={BasketScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <BottomNavigation
    barStyle={{ backgroundColor: "#ff671b" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Settings" component={SettingsScreen} />
    //     <Stack.Screen name="Basket" component={BasketScreen} />
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: "Welcome" }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
