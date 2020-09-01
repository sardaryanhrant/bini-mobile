import React, { useState } from "react";
import { Text, View, TouchableOpacity, AsyncStorage, ScrollView } from "react-native";
import { TextInput, List } from "react-native-paper";
import styles from "./styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AccountScreen from "../AccountScreen";
import AppearanceScreen from "../AppearanceScreen";
import LinksScreen from "../LinksScreen/LinksScreen";
import SecurityScreen from "../SecurityScreen";

const Tab = createMaterialTopTabNavigator();


const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function SettingsScreen(props: any) {
  return (
    <View style={styles.container}>
      <Tab.Navigator style={{marginTop: 20, backgroundColor: 'red'}}>
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Appearance" component={AppearanceScreen} />
        <Tab.Screen name="Links" component={LinksScreen} />
        <Tab.Screen name="Security" component={SecurityScreen} />
      </Tab.Navigator>
    </View>
  );
}

export default SettingsScreen;
