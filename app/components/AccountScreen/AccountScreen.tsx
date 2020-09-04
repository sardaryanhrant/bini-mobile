import React, { useState, useEffect } from "react";
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
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("userData").then((userData: string) => {
      const user = JSON.parse(userData);
      setName(user.displayName);
      setEmail(user.email);
    });
  }, []);

  const [img, setImg] = useState(require("../../../assets/png-avatar.png"));
  AsyncStorage.getItem("avatar").then((avatar) => {
    setImg({ uri: avatar });
  });

  const [selectorVisible, setVisible] = useState(false);
  const _showDialog = () => setVisible(true);
  const _hideDialog = () => setVisible(false);

  ///////////- Edit First Name -///////////
  const [selectorEditFirstName, setEditFirstName] = useState(false);
  const editFirstName = () => {
    if (selectorEditFirstName) {
      setEditFirstName(false);
    } else {
      setEditFirstName(true);
    }
  };
  const addName = () => {
    setEditFirstName(false);
  };
  ///////////////- End edit first name - /////////////

  ///////////- Edit Email -///////////
  const [selectorEditEmail, setEditEmail] = useState(false);
  const editEmail = () => {
    if (selectorEditEmail) {
      setEditEmail(false);
    } else {
      setEditEmail(true);
    }
  };
  const addEmail = () => {
    setEditEmail(false);
  };
  ///////////////- End edit email - /////////////

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
      const img = result;
      ({ uri: "data:image/png;base64," + img.base64 });
      AsyncStorage.setItem(
        "avatar",
        "data:image/png;base64," + img.base64
      ).then();
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
        <Image source={img} style={styles.selectAvatarImage} />
        {/* <Image
          source={require("../../../assets/png-avatar.png")}
          style={styles.selectAvatarImage}
        /> */}
        <View style={{ alignItems: "center" }}>
          <Text>Profile completion</Text>
          <Text style={styles.orange}>33%</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>Security rating</Text>
          <Text style={styles.orange}>100%</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => chooseImage()} style={styles.chooseImg}>
        <View style={styles.signinWithContent}>
          <List.Icon style={styles.chooseIcon} icon="image" color="#fff" />
          <Text style={styles.choose}>Choose</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "column", marginTop: 10, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <List.Icon style={styles.chooseIcon} icon="account" color="grey" />
            <View style={{ flexDirection: "column", marginTop: 6 }}>
              <Text>First Name</Text>
              {/* <Text>{name}</Text> */}
              {selectorEditFirstName ? (
                <TextInput
                  style={{ width: 200, height: 35 }}
                  value={firstName}
                ></TextInput>
              ) : (
                <Text style={{ marginTop: 4 }}>{firstName}</Text>
              )}
            </View>
          </View>
          {!selectorEditFirstName ? (
            <TouchableOpacity onPress={() => editFirstName()}>
              <List.Icon style={styles.chooseIcon} icon="pencil" color="grey" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => addName()}
              style={styles.addProfile}
            >
              <View style={styles.signinWithContent}>
                <Text style={styles.add}>Add</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <List.Icon style={styles.chooseIcon} icon="account" color="grey" />
            <View style={{ flexDirection: "column", marginTop: 6 }}>
              <Text>Last Name</Text>
              <Text style={{ marginTop: 4 }}>Test</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addProfile}>
            <View style={styles.signinWithContent}>
              <Text style={styles.add}>Add</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => editName()}>
            <List.Icon style={styles.chooseIcon} icon="pencil" color="grey" />
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <List.Icon style={styles.chooseIcon} icon="account" color="grey" />
            <View style={{ flexDirection: "column", marginTop: 6 }}>
              <Text>Username</Text>
              <Text style={{ marginTop: 4 }}>Test</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addProfile}>
            <View style={styles.signinWithContent}>
              <Text style={styles.add}>Add</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => editName()}>
            <List.Icon style={styles.chooseIcon} icon="pencil" color="grey" />
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <List.Icon style={styles.chooseIcon} icon="email" color="grey" />
            <View style={{ flexDirection: "column", marginTop: 6 }}>
              <Text>E-mail address</Text>
              {selectorEditEmail ? (
                <TextInput
                  style={{ width: 200, height: 35 }}
                  value={email}
                ></TextInput>
              ) : (
                <Text style={{ marginTop: 4 }}>{email}</Text>
              )}
            </View>
          </View>
          {!selectorEditEmail ? (
            <TouchableOpacity onPress={() => editEmail()}>
              <List.Icon style={styles.chooseIcon} icon="pencil" color="grey" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => addEmail()}
              style={styles.addProfile}
            >
              <View style={styles.signinWithContent}>
                <Text style={styles.add}>Add</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            borderBottomWidth: 1,
            borderBottomColor: "#c7c7c7",
          }}
        >
          <List.Icon style={styles.chooseIcon} icon="clock" color="grey" />
          <View style={{ flexDirection: "column", marginTop: 6 }}>
            <Text>Signed In</Text>
            <Text>Monday,August 31</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <List.Icon style={styles.chooseIcon} icon="delete" color="grey" />
            <View style={{ flexDirection: "column", marginTop: 6 }}>
              <Text>Delete Account</Text>
              <Text>Accounts can’t be recovered</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteProfile}>
            <View style={styles.signinWithContent}>
              <Text style={styles.delete}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
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
      </View>
    </View>
  );
}

export default AccountScreen;
