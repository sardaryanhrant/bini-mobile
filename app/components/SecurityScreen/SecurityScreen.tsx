import React, { useState } from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { TextInput, List } from "react-native-paper";
import styles from "./styles";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function SecurityScreen(props: any) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <List.Icon icon="lock" color="grey" />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.password}>Password</Text>
          </View>
        </View>
        <List.Icon icon="pencil" color="grey" />
      </View>
    </View>
  );
}

export default SecurityScreen;
