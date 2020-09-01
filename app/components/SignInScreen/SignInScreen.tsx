import React, { useState } from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { TextInput, List } from "react-native-paper";
import { signIn } from "../../services/auth.service";
import styles from "./styles";

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
    signIn(email, password).then(
      async (res: any) => {
        console.log("res", res);
        await AsyncStorage.setItem("userData", JSON.stringify(res.user));
        console.log("from storage", await AsyncStorage.getItem("userData"));
        props.navigation.navigate('Home')
      },
      (error: any) => {
        console.log("error", error);
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInBlock}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
          }}
        >
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
        <TouchableOpacity style={styles.reset}>
          <Text style={styles.resetTitle}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signInWith}>
        <TouchableOpacity style={styles.signWith}>
          <View style={styles.signinWithContent}>
            <List.Icon style={styles.facIcon} icon="facebook" color="#3c5a99" />
            <Text style={styles.facebook}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signWith}>
          <View style={styles.signinWithContent}>
            <List.Icon style={styles.googIcon} icon="google" color="#4285f4" />
            <Text style={styles.google}>Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signWith}>
          <View style={styles.signinWithContent}>
            <List.Icon style={styles.twIcon} icon="twitter" color="#1da1f2" />
            <Text style={styles.twitter}>Twitter</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignInScreen;
