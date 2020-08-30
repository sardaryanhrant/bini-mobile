import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { TextInput, List } from "react-native-paper";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function SignInScreen(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(password, email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInBlock}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>Sign in to your account</Text>
          <TouchableOpacity onPress={() => props.onClose()}>
            <List.Icon icon="close" color="#737272" />
          </TouchableOpacity>
        </View>
        <TextInput
          theme={theme}
          label="E-mail address"
          style={styles.signupInput}
          placeholder="john@doe.com"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          theme={theme}
          keyboardType="email-address"
          style={styles.signupInput}
          label="Password"
          placeholder="*******"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <View style={styles.nextToCard}>        
        <TouchableOpacity style={styles.signin} onPress={() => login()}>
          <Text style={styles.signTitle}>Sign In</Text>
        </TouchableOpacity>
         {/* <TouchableOpacity style={styles.reset}>
          <Text style={styles.resetTitle}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signInWith}>
        <TouchableOpacity style={styles.reset}>
          <Text style={styles.resetTitle}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reset}>
          <Text style={styles.signTitle}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signin}>
          <Text style={styles.signTitle}>Twitter</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default SignInScreen;
