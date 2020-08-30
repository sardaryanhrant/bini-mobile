import React, { useState } from "react";
import { Text, TouchableOpacity, View, AsyncStorage } from "react-native";
import styles from "./styles";
import { TextInput, List } from "react-native-paper";
import {
  signUpWithEmaiAndPassword,
  updateUser,
} from "../../services/auth.service";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function Step1(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setNmae] = useState("");

  const closeModal = () => {
    props.onClose();
  };

  const goToCardScreen = () => {
    signUpWithEmaiAndPassword(email, password).then(
      async (user: any) => {
        updateUser({
          displayName: name,
          credit_card: "4242424242424242",
        })?.then(async (res) => {
          await AsyncStorage.setItem("userData", JSON.stringify(user));
          console.log("from storage", await AsyncStorage.getItem("userData"));
          props.setStep(2);
        });
      },
      (error: any) => {
        console.log("error", error);
      }
    );
  };

  if (props.step !== 1) return null;

  return (
    <View>
      <TextInput
        theme={theme}
        label="First name*"
        style={styles.signupInput}
        placeholder="John"
        onChangeText={(text) => setNmae(text)}
      ></TextInput>
      <TextInput
        theme={theme}
        style={styles.signupInput}
        label="E-mail address*"
        placeholder="john@doe.com"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        theme={theme}
        label="Password*"
        style={styles.signupInput}
        placeholder="*********"
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <View style={styles.nextToCard}>
        <TouchableOpacity
          onPress={() => goToCardScreen()}
          disabled={name == "" || password == "" || email == ""}
          style={styles.nextBtn}
        >
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Step1;
