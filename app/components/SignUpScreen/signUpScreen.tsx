import React, { useState } from "react";
import { Text, TouchableOpacity, View, AsyncStorage } from "react-native";
import styles from "./styles";
import { TextInput, List } from "react-native-paper";
import {
  signUpWithEmailAddressAndPassword,
  updateUser,
} from "../../services/auth.service";
import Step1 from "./StepOne";
import Step2 from "./StepTwo";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function SignUpScreen(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setNmae] = useState("");

  const closeModal = () => {
    props.onClose();
  };

  const goToCardScreen = () => {
    signUpWithEmailAddressAndPassword(email, password).then(
      async (user: any) => {
        updateUser({
          displayName: name,
          credit_card: "4242424242424242",
        })?.then(async (res) => {
          await AsyncStorage.setItem("userData", JSON.stringify(user));
          console.log("from storage", await AsyncStorage.getItem("userData"));
        });
      },
      (error: any) => {
        console.log("error", error);
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.signUpBlock}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>Sign up for an account</Text>
          <TouchableOpacity onPress={() => closeModal()}>
            <List.Icon icon="close" color="#737272" />
          </TouchableOpacity>
        </View>
        <Step1 />
        <Step2 />
      </View>
    </View>
  );
}


export default SignUpScreen;
