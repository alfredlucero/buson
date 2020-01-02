import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenDirectory } from "../screenDirectory";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsernameText] = useState("");
  const [password, setPasswordText] = useState("");
  const [confirmPassword, setConfirmPasswordText] = useState("");

  return (
    <View style={styles.signupContainer}>
      <Text>Username</Text>
      <TextInput
        style={styles.authInput}
        value={username}
        onChangeText={text => setUsernameText(text)}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.authInput}
        value={password}
        onChangeText={text => setPasswordText(text)}
      />
      <Text>Confirm Password</Text>
      <TextInput
        style={styles.authInput}
        value={confirmPassword}
        onChangeText={text => setConfirmPasswordText(text)}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate(ScreenDirectory.Home)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#595959",
  },
  authInput: {
    height: 40,
    borderColor: "#595959",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default SignupScreen;
