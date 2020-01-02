import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenDirectory } from "./screens/screenDirectory";
import IntroScreen from "./screens/Intro";
import LoginScreen from "./screens/Login";
import SignupScreen from "./screens/Signup";
import HomeScreen from "./screens/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name={ScreenDirectory.Intro}
          component={IntroScreen}
          options={{ title: "Buson" }}
        />
        <Stack.Screen
          name={ScreenDirectory.Login}
          component={LoginScreen}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name={ScreenDirectory.Signup}
          component={SignupScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name={ScreenDirectory.Home}
          component={HomeScreen}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
