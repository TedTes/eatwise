import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  ScanReceipt: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const ScanReceiptScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Scan your receipt here.</Text>
      <Button
        title="View Nutrition Details"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default ScanReceiptScreen;
