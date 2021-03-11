import React from "react";
import { StyleSheet, ScrollView, Image, Text } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent style={styles.viewBody}>
      <Image
        source={require("../../assets/large_datahungry.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil en datahungry</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu hambre? Busca y antojate de las mejores delicias
        de tu ciudad de una forma sencilla, vota cuál te ha gustado más y
        comparte tu experiencia.
      </Text>
      <Button
        title="Ver tu perfil"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("login")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },

  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginVertical: 10,
    textAlign: "center",
    color: "#2C313F",
  },

  description: {
    marginBottom: 20,
    textAlign: "center",
    color: "#7A7C84",
  },

  button: {
    backgroundColor: "#f36b24",
  },
});
