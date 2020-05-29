import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GoforeScreen() {
  return <Text style={styles.goforeText}>Gofore</Text>;
}

const styles = StyleSheet.create({
  // Change fontSize, color, etc stylings
  goforeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "orange",
  },
});
