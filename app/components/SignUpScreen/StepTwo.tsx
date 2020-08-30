import React, { useState } from "react";
import { Text, TouchableOpacity, View, AsyncStorage } from "react-native";
import { TextInput, List } from "react-native-paper";

import styles from "../SignInScreen/styles";

function Step2(props: any) {
  const [cc, setCc] = useState("");
  const [expire, setSexpire] = useState("");
  const [code, setCode] = useState("");

  const theme = {
    colors: {
      primary: "#ff671b",
    },
  };

  const goToStep3 = () => {

  }

  return (
    <View style={[styles.container, styles.step1]}>
      <View>
        <TextInput
          theme={theme}
          label="Credit Card*"
          style={styles.signupInput}
          placeholder="*********"
          onChangeText={(text) => setCc(text)}
        ></TextInput>
      </View>
      <View>
        <TextInput
          theme={theme}
          label="Credit Card*"
          style={styles.signupInput}
          placeholder="*********"
          onChangeText={(text) => setSexpire(text)}
        ></TextInput>{" "}
        <TextInput
          theme={theme}
          label="Credit Card*"
          style={styles.signupInput}
          placeholder="*********"
          onChangeText={(text) => setCode(text)}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => goToStep3()}
        disabled={cc == "" || expire == "" || code == ""}
        style={styles.nextBtn}
      >
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Step2
