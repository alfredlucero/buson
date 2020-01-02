import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenDirectory } from "../screenDirectory";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeContainer}>
      <Text>Buson Home</Text>
      <Button
        title="Log Out"
        onPress={() => {
          navigation.navigate(ScreenDirectory.Intro);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#595959",
  },
});

export default HomeScreen;
