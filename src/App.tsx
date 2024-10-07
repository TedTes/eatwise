import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./store"; // Redux store
import HomeScreen from "./screens/HomeScreen";
import ScanReceiptScreen from "./screens/ScanReceiptScreen";
import NutritionDetailsScreen from "./screens/NutritionDetailsScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          {/* Define your app screens and their navigation */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome to Receipt Tracker" }}
          />
          <Stack.Screen
            name="ScanReceipt"
            component={ScanReceiptScreen}
            options={{ title: "Scan Receipt" }}
          />
          <Stack.Screen
            name="NutritionDetails"
            component={NutritionDetailsScreen}
            options={{ title: "Nutrition Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
