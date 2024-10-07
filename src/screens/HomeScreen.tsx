import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  ScanReceipt: undefined;
};
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Receipt Tracker App!</Text>
      <Button
        title="Scan a Receipt"
        onPress={() => navigation.navigate("ScanReceipt")}
      />
    </View>
  );
};

export default HomeScreen;
