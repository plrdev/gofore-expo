import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, TextInput } from "react-native";

export default function GoforeScreen() {
  const [countries, setCountries] = useState([]);
  // add useState variable (input) for the user input (controlled component)
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const json = await res.json();
      setCountries(json);
    };
    fetchCountries();
  }, []);
  // add variable that has filtered countries according to input
  return (
    <>
      <Text style={styles.goforeText}>Gofore</Text>
      <TextInput
        style={styles.textInput}
        // set value to be our input value
        value={""}
        // set the changed text to input
        onChangeText={(text) => {}}
      />
      <FlatList
        // change data to be the filtered countries
        data={countries}
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
  textInput: {
    height: 40,
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
  },
});
