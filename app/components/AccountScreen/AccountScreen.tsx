import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from "react-native";
import { TextInput, List } from "react-native-paper";
import styles from "./styles";
import { Button, Dialog, Portal, Provider } from "react-native-paper";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};

function AccountScreen(props: any) {
  const [selectorVisible, setVisible] = useState(false);

  const _showDialog = () => setVisible(true);
  const _hideDialog = () => setVisible(false);

  const chooseImage = () => {
    _showDialog();
  };

  const chooseCameraPhoto = async () => {
    _hideDialog();
    getPermissionAsyncFromCamera().then();
    let result: any = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      console.log("-----------");
    }
  };

  const chooseLibraryPhoto = async () => {
    _hideDialog();
    getPermissionAsyncFromLibrary().then();
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
    }
  };

  const getPermissionAsyncFromCamera = async () => {
    // if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status) {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
    // }
  };
  const getPermissionAsyncFromLibrary = async () => {
    // if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status) {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
    // }
  };

  return (
    <View style={styles.choosePhoto}>
      <View
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/png-avatar.png")}
          style={styles.selectAvatarImage}
        />
        <View style={{ alignItems: "center" }}>
          <Text>Profile completion</Text>
          <Text>33%</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>Security rating</Text>
          <Text>100%</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => chooseImage()} style={styles.chooseImg}>
        <View style={styles.signinWithContent}>
          <List.Icon style={styles.chooseIcon} icon="image" color="#000" />
          <Text style={styles.choose}>Choose</Text>
        </View>
      </TouchableOpacity>
      <Provider>
        <Portal>
          <Dialog visible={selectorVisible} onDismiss={_hideDialog}>
            <Dialog.Actions style={styles.dialogActions}>
              <Button onPress={chooseCameraPhoto} uppercase={false}>
                Take Photo ...
              </Button>
              <Button onPress={chooseLibraryPhoto} uppercase={false}>
                From Library ...
              </Button>
              <Button onPress={_hideDialog} uppercase={false}>
                Cancel
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
      <View style={{ flexDirection: "column", marginTop: 10, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <List.Icon style={styles.chooseIcon} icon="facebook" color="#000" />
          <View style={{ flexDirection: "column" }}>
            <Text>First Name</Text>
            <Text>Test</Text>
          </View>
          <List.Icon style={styles.chooseIcon} icon="pencil" color="#000" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <List.Icon style={styles.chooseIcon} icon="facebook" color="#000" />
          <View style={{ flexDirection: "column" }}>
            <Text>Last Name</Text>
            <Text>Test</Text>
          </View>
          <List.Icon style={styles.chooseIcon} icon="pencil" color="#000" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <List.Icon style={styles.chooseIcon} icon="facebook" color="#000" />
          <View style={{ flexDirection: "column" }}>
            <Text>Username</Text>
            <Text>Test</Text>
          </View>
          <List.Icon style={styles.chooseIcon} icon="pencil" color="#000" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <List.Icon style={styles.chooseIcon} icon="facebook" color="#000" />
          <View style={{ flexDirection: "column" }}>
            <Text>E-mail address</Text>
            <Text>Test</Text>
          </View>
          <List.Icon style={styles.chooseIcon} icon="pencil" color="#000" />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            borderBottomWidth: 1,
            borderBottomColor: "#c7c7c7",
          }}
        >
          <List.Icon style={styles.chooseIcon} icon="facebook" color="#000" />
          <View style={{ flexDirection: "column" }}>
            <Text>Signed In ----</Text>
            <Text>Sunday, August --</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <List.Icon style={styles.chooseIcon} icon="delete" color="#000" />
          <View style={{ flexDirection: "column" }}>
            <Text>Delete Account</Text>
            <Text>Accounts can’t be recovered</Text>
          </View>
          <TouchableOpacity
            style={styles.deleteProfile}
          >
            <View style={styles.signinWithContent}>
              <Text style={styles.delete}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AccountScreen;