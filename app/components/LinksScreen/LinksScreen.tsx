import React, { useState } from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { TextInput, List } from "react-native-paper";
import styles from "./styles";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function LinksScreen(props: any) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <List.Icon style={styles.facIcon} icon="facebook" color="#3c5a99" />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.facebook}>Facebook</Text>
          </View>
          <List.Icon style={styles.linkIcon} icon="link" color="grey" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <List.Icon style={styles.googIcon} icon="google" color="#4285f4" />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.google}>Google</Text>
          </View>
          <List.Icon style={styles.linkIcon} icon="link" color="grey" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <List.Icon style={styles.twIcon} icon="twitter" color="#1da1f2" />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.twitter}>Twitter</Text>
          </View>
          <List.Icon style={styles.linkIcon} icon="link" color="grey" />
        </View>
      </View>
    </View>
  );
}

export default LinksScreen;
