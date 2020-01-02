import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenDirectory } from "../screenDirectory";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsernameText] = useState("");
  const [password, setPasswordText] = useState("");

  return (
    <View style={styles.loginContainer}>
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

      <Button
        onPress={() => {
          navigation.navigate(ScreenDirectory.Home);
        }}
        title="Log In"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
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

export default LoginScreen;
