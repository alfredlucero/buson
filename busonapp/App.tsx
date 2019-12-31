import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  return (
    <View style={styles.landingContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buson</Text>
        <Text style={styles.subHeader}>A secure box for your mail drops!</Text>
      </View>

      <View style={styles.authContainer}>
        <View style={styles.signupButton}>
          <Button onPress={() => {}} title="Sign Up" color="steelblue" />
        </View>
        <View style={styles.loginButton}>
          <Button onPress={() => {}} title="Login" color="#fcfcfc" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "steelblue",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 10,
  },
  subHeader: {
    color: "#595959",
    fontSize: 20,
  },
  authContainer: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 90,
    width: "100%",
    flexDirection: "row",
  },
  signupButton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "steelblue",
    borderWidth: 2,
    borderRadius: 5,
  },
  loginButton: {
    width: "50%",
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 5,
  },
});

export default App;
