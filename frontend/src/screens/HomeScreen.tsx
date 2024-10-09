type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};
// export default HomeScreen;
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import { StackNavigationProp } from "@react-navigation/stack";
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Circular Progress Bars */}
      <View style={styles.progressSection}>
        <View style={styles.progressItem}>
          <ProgressCircle style={styles.circle} progress={0.75} />
          <Text>Calories: 1500/2000</Text>
        </View>
        <View style={styles.progressItem}>
          <ProgressCircle style={styles.circle} progress={0.67} />
          <Text>Protein: 100g/150g</Text>
        </View>
      </View>

      {/* Scan Button */}
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => navigation.navigate("ScanReceipt")}
      >
        <Text style={styles.scanText}>Scan a Receipt</Text>
      </TouchableOpacity>

      {/* Meal Suggestions */}
      <View style={styles.suggestionsSection}>
        <Text style={styles.sectionTitle}>Meal Suggestions</Text>
        <View style={styles.mealCard}>
          <Text>Chicken Salad</Text>
        </View>
        <View style={styles.mealCard}>
          <Text>Avocado Toast</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fafafa",
  },
  progressSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  progressItem: {
    alignItems: "center",
  },
  circle: {
    height: 80,
    width: 80,
  },
  scanButton: {
    backgroundColor: "#f4511e",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 50,
  },
  scanText: {
    color: "#fff",
    fontWeight: "bold",
  },
  suggestionsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  mealCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
