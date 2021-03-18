import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState("");

  const defaultFormValues = () => {
    return { email: "", password: "", confirm: "" };
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.form}>
      <Input
        containerStyle={styles.input}
        placeholder="Ingresa tu email"
        onChange={(e) => onChange(e, "email")}
        keyboardType="email-address"
      />
      <Input
        placeholder="Ingresa tu contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "password")}
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
        placeholder="Confirma tu contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "confirm")}
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
        onPress={() => console.log(formData)}
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

  icon: {
    color: "#a7a7a7",
  },
});
