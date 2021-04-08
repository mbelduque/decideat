import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import Loading from "../Loading";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const doLogin = () => {
    console.log("login");
  };

  return (
    <View style={styles.container}>
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
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.button}
        onPress={() => doLogin()}
      />
      <Loading isVisible={loading} text="Iniciando sesión..." />
    </View>
  );
}

const defaultFormValues = () => {
  return { email: "", password: "" };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  input: {
    width: "100%",
    borderStartColor: "#f36b24",
  },

  icon: {
    color: "#a7a7a7",
  },

  btnContainer: {
    marginTop: 55,
    width: "50%",
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#f36b24",
  },
});
