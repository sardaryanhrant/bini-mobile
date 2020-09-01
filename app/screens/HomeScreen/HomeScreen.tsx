import React, { Component, useState } from "react";
import { Text, View, Image, TouchableOpacity, Modal, AsyncStorage } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";
import { Dialog, Portal, Provider } from "react-native-paper";
import SignUpScreen from "../../components/SignUpScreen";
import SignInScreen from "../../components/SignInScreen";
import { auth } from "../../services/firebase";

export function HomeScreen(props: any) {
  const [modalSignUpVisible, setmodalSignUpVisible] = useState(false);
  const [modalSignInVisible, setmodalSignInVisible] = useState(false);

  const showDialogSignUp = () => setmodalSignUpVisible(true);
  const hideDialogSignUp = () => setmodalSignUpVisible(false);
  const showDialogSignIn = () => setmodalSignInVisible(true);
  const hideDialogSignIn = () => setmodalSignInVisible(false);
  const navigation = useNavigation();

  const logout = async () => {
    auth.signOut();
    await AsyncStorage.removeItem('user');
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoOrange}>
        <Image
          style={styles.orangeLogo}
          source={require("../../../assets/logo-orange.png")}
        />
        <Text style={styles.bini}>BINI</Text>
        <Text style={styles.signInUp}>Your local honey pot.</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <View style={styles.logout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
