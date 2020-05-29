import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList } from "react-native";

//remove countryData
const countryData = [
  { numericCode: "358", name: "Finland" },
  { numericCode: "1", name: "Sweden" },
  { numericCode: "2", name: "Russia" },
  { numericCode: "3", name: "Spain" },
];
export default function GoforeScreen() {
  // add countries to a useState (countries), default value as empty array

  // add useEffect, which will fetch list of countries:
  // "https://restcountries.eu/rest/v2/all"
  // Set the response to countries
  return (
    <>
      <Text style={styles.goforeText}>Gofore</Text>
      <FlatList
        // switch to use countries
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
