import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, Modal } from "react-native";
import styles from "./styles";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Dialog, Portal, Provider } from "react-native-paper";
import SignUpScreen from "../../components/SignUpScreen";
import SignInScreen from "../../components/SignInScreen";

interface Props extends NavigationStackScreenProps {}
class HomeScreen extends Component {
  state = {
    modalSignUpVisible: false,
    modalSignInVisible: false,
  };
  showDialogSignUp = () => this.setState({ modalSignUpVisible: true });
  hideDialogSignUp = () => this.setState({ modalSignUpVisible: false });
  showDialogSignIn = () => this.setState({ modalSignInVisible: true });
  hideDialogSignIn = () => this.setState({ modalSignInVisible: false });

  async componentDidMount() {}

  render() {
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
            onPress={this.showDialogSignUp}
            style={styles.signBtn}
          >
            <Text style={styles.sign}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.showDialogSignIn}>
            <Text style={styles.sign}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Provider>
          <Portal>
            <Dialog
              visible={this.state.modalSignUpVisible}
              onDismiss={this.hideDialogSignUp}
            >
              <SignUpScreen onClose={this.hideDialogSignUp} />
            </Dialog>
          </Portal>
        </Provider>
        <Provider>
          <Portal>
            <Dialog
              visible={this.state.modalSignInVisible}
              onDismiss={this.hideDialogSignIn}
            >
              <SignInScreen onClose={this.hideDialogSignIn} />
            </Dialog>
          </Portal>
        </Provider>
      </View>
    );
  }
}

export default HomeScreen;
