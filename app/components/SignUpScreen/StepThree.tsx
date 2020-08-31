import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  AsyncStorage,
} from "react-native";
import { TextInput, List } from "react-native-paper";
import * as Permissions from "expo-permissions";
import { Button, Dialog, Portal } from "react-native-paper";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";

function Step2(props: any) {
  const [img, setImg] = useState(require("../../../assets/png-avatar.png"));
  const [selectorVisible, setVisible] = useState(false);
  const [cc, setCc] = useState("");
  const [expire, setSexpire] = useState("");
  const [cvc, setCode] = useState("");

  AsyncStorage.getItem('avatar').then(avatar => {
    // console.log(avatar)
    setImg({uri: avatar})
  })

  const theme = {
    colors: {
      primary: "#ff671b",
    },
  };

  const goToStep4 = async () => {
    const card = { cc, expire, cvc };
    props.navigation.navigate('Home')
  };

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
      const img = result;
      setImg({uri: 'data:image/png;base64,' + img.base64});
      AsyncStorage.setItem('avatar', 'data:image/png;base64,' + img.base64).then();
      console.log(img.base64);
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

  if (props.step !== 3) {
    return null;
  } else {
    return (
      <View style={styles.choosePhoto}>
        <Image source={img} style={styles.selectAvatarImage} />
        <TouchableOpacity
          onPress={() => chooseImage()}
          style={styles.chooseImg}
        >
          <View style={styles.signinWithContent}>
            <List.Icon style={styles.chooseIcon} icon="image" color="#000" />
            <Text style={styles.choose}>Choose...</Text>
          </View>
          
        </TouchableOpacity>
        <View style={styles.nextToCard}>
        <TouchableOpacity
          onPress={() => goToStep4()}
          style={styles.nextBtn}
        >
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
        </View>
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
      </View>
    );
  }
}

export default Step2;
