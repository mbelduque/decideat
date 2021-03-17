import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";

export default function RegisterForm() {
  return (
    <View style={styles.form}>
      <Input containerStyle={styles.input} placeholder="Ingresa tu email" />
      <Input
        placeholder="Ingresa tu contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={true}
      />
      <Input
        placeholder="Confirma tu contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={true}
      />
      <Button
        title="Registrar nuevo usuario"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },

  input: {
    width: "100%",
  },

  btnContainer: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#f36b24",
  },
});
