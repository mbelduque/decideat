import React from "react";
import { StyleSheet, Image } from "react-native";
import RegisterForm from "../../components/account/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <RegisterForm />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 90,
    width: "35%",
    marginTop: "25%",
    marginBottom: 20,
  },
});
