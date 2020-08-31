import React from "react";
// import 'react-native-gesture-handler';
import { StyleSheet, Text, View, YellowBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import  HomeScreen  from "./app/screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";

import { BasketScreen } from "./app/screens/Basket/BasketScreen";
import SettingsScreen from "./app/components/SettingsScreen";
import AuthScreen from "./app/screens/AuthScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
YellowBox.ignoreWarnings(["Setting a timer"]);

export default function HomeStack() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "basket", title: "Basket", icon: "cart" },
    { key: "settings", title: "Settings", icon: "settings" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    basket: BasketScreen,
    settings: SettingsScreen,
  });
  return (
      <BottomNavigation
        barStyle={{ backgroundColor: "#ff671b" }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />

  );
}

const styles = StyleSheet.create({});
