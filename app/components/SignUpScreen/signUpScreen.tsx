import React, { useState } from "react";
import { Text, TouchableOpacity, View, AsyncStorage } from "react-native";
import styles from "./styles";
import { TextInput, List } from "react-native-paper";

import Step1 from "./StepOne";
import Step2 from "./StepTwo";
import Step3 from "./StepThree";

const theme = {
  colors: {
    primary: "#ff671b",
  },
};


function SignUpScreen(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setNmae] = useState("");
  const [step, setStep] = useState(1);

  const closeModal = () => {
    props.onClose();
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
        <Step1 step={step} setStep={setStep} />
        <Step2 step={step} setStep={setStep} />
        <Step3 step={step} setStep={setStep} navigation={props.navigation}/>
      </View>
    </View>
  );
}

export default SignUpScreen;
