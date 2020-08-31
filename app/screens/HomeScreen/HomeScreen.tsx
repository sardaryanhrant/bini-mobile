import React, { Component, useState } from "react";
import { Text, View, Image, TouchableOpacity, Modal } from "react-native";
import styles from "./styles";
import { Dialog, Portal, Provider } from "react-native-paper";
import SignUpScreen from "../../components/SignUpScreen";
import SignInScreen from "../../components/SignInScreen";
import { auth } from "../../services/firebase";
function  HomeScreen({navigation}) {

  console.log(navigation)

  const [modalSignUpVisible, setmodalSignUpVisible] = useState(false)
  const [modalSignInVisible, setmodalSignInVisible] = useState(false)

  const showDialogSignUp = () => setmodalSignUpVisible(true );
  const hideDialogSignUp = () => setmodalSignUpVisible(false);
  const showDialogSignIn = () => setmodalSignInVisible( true );
  const hideDialogSignIn = () => setmodalSignInVisible(false );
  if(auth.currentUser) {
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
      </View>
    )
  } else

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

        <View style={styles.signInUp}>
          <TouchableOpacity
            onPress={showDialogSignUp}
            style={styles.signBtn}
          >
            <Text style={styles.sign}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showDialogSignIn}>
            <Text style={styles.sign}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Provider>
          <Portal>
            <Dialog
              visible={modalSignUpVisible}
              onDismiss={hideDialogSignUp}
            >
              <SignUpScreen onClose={hideDialogSignUp}  navigation={navigation}/>
            </Dialog>
          </Portal>
        </Provider>
        <Provider>
          <Portal>
            <Dialog
              visible={modalSignInVisible}
              onDismiss={hideDialogSignIn}
            >
              <SignInScreen onClose={hideDialogSignIn}/>
            </Dialog>
          </Portal>
        </Provider>
      </View>
    );
  
}

export default HomeScreen;
