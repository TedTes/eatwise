import React from "react";
import { View, Text } from "react-native";

const NutritionDetailsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Here are the nutrition details of your scanned receipt.</Text>
    </View>
  );
};

export default NutritionDetailsScreen;
