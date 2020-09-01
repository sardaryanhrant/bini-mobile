import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  CheckBox,
} from "react-native";
import { TextInput, List, Checkbox } from "react-native-paper";
import styles from "./styles";
import RNPickerSelect from "react-native-picker-select";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function AppearanceScreen(props: any) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", marginTop: 10, padding: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <List.Icon style={styles.chooseIcon} icon="circle" color="#ff671b" />
          <View style={{ flexDirection: "column", marginTop: 10 }}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Red", value: "red" },
                { label: "Pink", value: "pink" },
                { label: "Purple", value: "purple" },
                { label: "Green", value: "green" },
                { label: "Orange", value: "orange" },
                { label: "Blue", value: "blue" },
              ]}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <List.Icon style={styles.chooseIcon} icon="circle" color="#ff671b" />
          <View style={{ flexDirection: "column", marginTop: 10 }}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Red", value: "red" },
                { label: "Pink", value: "pink" },
                { label: "Purple", value: "purple" },
                { label: "Green", value: "green" },
                { label: "Orange", value: "orange" },
                { label: "Blue", value: "blue" },
              ]}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
            borderBottomWidth: 1,
            borderBottomColor: "#c7c7c7",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <List.Icon style={styles.chooseIcon} icon="account" color="grey" />
            <View style={{ flexDirection: "column", marginTop: 6 }}>
              <Text>Dark mode</Text>
              <Text>Display</Text>
            </View>
          </View>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <List.Icon style={styles.chooseIcon} icon="account" color="grey" />
            <View style={{ flexDirection: "column", marginTop: 6 }}>
              <Text>Reset theme</Text>
              <Text>No changes</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.resetTheme}>
            <View style={styles.resetThemeContent}>
              <Text style={styles.reset}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AppearanceScreen;
