import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { size } from "lodash";

import { validateEmail } from "../../utils/helpers";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const registerUser = () => {
    if (!validateData()) {
      return;
    }
    console.log("entró");
  };

  const validateData = () => {
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfirm("");
    let isValid = true;
    if (!validateEmail(formData.email)) {
      setErrorEmail("Debes ingresar un email válido");
      isValid = false;
    }
    if (size(formData.password) < 6) {
      setErrorPassword("Debes ingresar una contraseña de almenos 6 carácteres");
      isValid = false;
    }
    if (size(formData.confirm) < 6) {
      setErrorConfirm(
        "Debes ingresar una confirmación de almenos 6 carácteres"
      );
      isValid = false;
    }
    if (formData.password != formData.confirm) {
      setErrorConfirm("La contraseña de confirmación no coincide");
      isValid = false;
    }
    return isValid;
  };

  return (
    <View style={styles.form}>
      <Input
        containerStyle={styles.input}
        placeholder="email@direccion.com"
        keyboardType="email-address"
        onChange={(e) => onChange(e, "email")}
        errorMessage={errorEmail}
        defaultValue={formData.email}
        leftIcon={
          <Icon
            type="material-community"
            name={"email"}
            iconStyle={styles.icon}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "password")}
        errorMessage={errorPassword}
        defaultValue={formData.password}
        leftIcon={
          <Icon
            type="material-community"
            name={"lock"}
            iconStyle={styles.icon}
          />
        }
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Confirmar contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "confirm")}
        errorMessage={errorConfirm}
        defaultValue={formData.confirm}
        leftIcon={
          <Icon
            type="material-community"
            name={"lock"}
            iconStyle={styles.icon}
          />
        }
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Registrar nuevo usuario"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.button}
        onPress={() => registerUser()}
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
    borderStartColor: "#f36b24",
  },

  btnContainer: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#f36b24",
  },

  icon: {
    color: "#a7a7a7",
  },
});
