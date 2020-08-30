import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { TextInput, List } from "react-native-paper";

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
    console.log(name, password, email);
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
    </View>
  );
}

export default SignUpScreen;
