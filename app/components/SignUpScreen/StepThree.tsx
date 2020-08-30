import React, { useState } from "react";
import { Text, TouchableOpacity, View, AsyncStorage } from "react-native";
import { TextInput, List } from "react-native-paper";

import styles from "./styles";

function Step2(props: any) {
  const [cc, setCc] = useState("");
  const [expire, setSexpire] = useState("");
  const [cvc, setCode] = useState("");

  const theme = {
    colors: {
      primary: "#ff671b",
    },
  };

   const goToStep4 = async () => {
    const card = {cc, expire,cvc};
    await AsyncStorage.setItem("creditCard", JSON.stringify(card));
  };

  if (props.step !== 3) {
    return null;
  } else {
    return (
      <View>
        <View>
          <TextInput
            theme={theme}
            label="Credit Card*"
            style={styles.signupInput}
            placeholder="4242 4242 4242 4242 4242"
            onChangeText={(text) => setCc(text)}
          ></TextInput>
        </View>
        <View style={styles.row}>
          <TextInput
            theme={theme}
            label="Expiration Date*"
            style={[styles.inputHalf, styles.signupInput]}
            placeholder="12/20"
            onChangeText={(text) => setSexpire(text)}
          ></TextInput>
          <TextInput
            theme={theme}
            label="Cvc"
            style={[styles.inputHalf, styles.signupInput]}
            placeholder="123"
            onChangeText={(text) => setCode(text)}
          ></TextInput>
        </View>
        <View style={styles.nextToCard}>
          <TouchableOpacity
            onPress={() => goToStep4()}
            disabled={cc == "" || expire == "" || cvc == ""}
            style={styles.nextBtn}
          >
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Step2;
