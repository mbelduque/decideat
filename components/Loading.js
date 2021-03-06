import React from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading({ isVisible, text }) {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.Overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#f36b24" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  Overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#bb4c1c",
    borderWidth: 2,
    borderRadius: 10,
  },

  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#f36b24",
    marginTop: 10,
  },
});
