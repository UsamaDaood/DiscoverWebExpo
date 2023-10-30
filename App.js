import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigation/appNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function App() {
  const [isLoaded] = useFonts({
    "Exo-Regular": require("./assets/fonts/exo/Exo-Regular.ttf"),
    "Exo-Medium": require("./assets/fonts/exo/Exo-Medium.ttf"),
    "Exo-Bold": require("./assets/fonts/exo/Exo-Bold.ttf"),
    "Exo-SemiBold": require("./assets/fonts/exo/Exo-SemiBold.ttf"),
    //other
    "Roboto-Bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/roboto/Roboto-Regular.ttf"),
    "Roboto-Light": require("./assets/fonts/roboto/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/roboto/Roboto-Medium.ttf"),
    "Roboto-SemiBold": require("./assets/fonts/roboto/Roboto-SemiBold.ttf"),
  });

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
