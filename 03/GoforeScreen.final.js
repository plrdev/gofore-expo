import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList } from "react-native";

export default function GoforeScreen() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const json = await res.json();
      setCountries(json);
    };
    fetchCountries();
  }, []);
  return (
    <>
      <Text style={styles.goforeText}>Gofore</Text>
      <FlatList
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
});
