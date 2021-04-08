import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <Text
      style={styles.register}
      onPress={() => navigation.navigate("register")}
    >
      ¿Aún no tienes una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Regístrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
    marginTop: 20,
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
