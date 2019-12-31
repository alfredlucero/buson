import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buson</Text>
      <Text style={styles.subHeader}>Secure box for your mail drops!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#595959",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 10,
  },
  subHeader: {
    color: "#595959",
    fontSize: 20,
  },
});
