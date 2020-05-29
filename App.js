import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import GoforeScreen from "./04/GoforeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GoforeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
