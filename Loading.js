import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={style.text}>Getting the foking weather</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "black",
    fontSize: 30
  }
});
