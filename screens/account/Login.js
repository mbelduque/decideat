import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";

export default function Login() {
  return (
    <ScrollView>
      <Image
        source={require("../../assets/large_datahungry.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <Text>Login Form</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
    </ScrollView>
  );
}

function CreateAccount(props) {
  return (
    <Text style={styles.register} onPress={() => console.log("registrar")}>
      ¿Aún no tienes una cuenta?{" "}
      <Text style={styles.btnRegister}>Regístrate</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },

  container: {
    marginHorizontal: 40,
  },

  divider: {
    backgroundColor: "#f36b24",
    margin: 40,
  },

  register: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: "center",
  },

  btnRegister: {
    color: "#f36b24",
    fontWeight: "bold",
  },
});
