import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ScanReceiptScreen from "./src/screens/ScanReceiptScreen";
// import LogMealScreen from "./src/screens/LogMealScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "EatWise Dashboard" }}
        />

        <Stack.Screen
          name="ScanReceipt"
          component={ScanReceiptScreen}
          options={{ title: "Scan Receipt" }}
        />
        {/* <Stack.Screen
          name="LogMeal"
          component={LogMealScreen}
          options={{ title: "Log Meal" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
