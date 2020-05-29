import React, { useState } from "react";
import { StyleSheet, Text, FlatList } from "react-native";

const countryData = [
  { numericCode: "358", name: "Finland" },
  { numericCode: "1", name: "Sweden" },
  { numericCode: "2", name: "Russia" },
  { numericCode: "3", name: "Spain" },
];

export default function GoforeScreen() {
  return (
    <>
      <Text style={styles.goforeText}>Gofore</Text>
      <FlatList
        data={countryData}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
        keyExtractor={(item) => item.numericCode}
      />
    </>
  );
}

const styles = StyleSheet.create({
  // Change fontSize, fontWeight color, etc stylings
  goforeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "orange",
  },
});
