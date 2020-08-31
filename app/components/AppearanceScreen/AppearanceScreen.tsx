import React, { useState } from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { TextInput, List } from "react-native-paper";
import styles from "./styles";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function AppearanceScreen(props: any) {
  return (
    <View style={styles.container}>
      <TextInput
        theme={theme}
        label="Primary Color"
        placeholder="john@doe.com"
      ></TextInput>
      <TextInput
        theme={theme}
        keyboardType="email-address"
        label="Secondary Color"
        placeholder="*******"
      ></TextInput>
    </View>
  );
}

export default AppearanceScreen;
