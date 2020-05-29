import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, TextInput } from "react-native";

export default function GoforeScreen() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const json = await res.json();
      setCountries(json);
    };
    fetchCountries();
  }, []);
  const filteredCountries = countries.filter((country) =>
    country.name.includes(input)
  );
  return (
    <>
      <Text style={styles.goforeText}>Gofore</Text>
      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <FlatList
        data={filteredCountries}
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
