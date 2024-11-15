import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MyBooksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Books</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("To Read clicked!")}
        >
          <Text style={styles.buttonText}>To Read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Read clicked!")}
        >
          <Text style={styles.buttonText}>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Currently Reading clicked!")}
        >
          <Text style={styles.buttonText}>Currently Reading</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Create New Shelf clicked!")}
        >
          <Text style={styles.buttonText}>Create New Shelf</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center", // Center content vertically
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center", // Center content horizontally
  },
  button: {
    backgroundColor: "#007BFF", // Button color
    paddingVertical: 15, // Vertical padding for touch area
    paddingHorizontal: 20, // Horizontal padding for better spacing
    borderRadius: 10,
    width: "80%", // Make buttons take up 80% of the screen width
    marginVertical: 10, // Add space between buttons
    alignItems: "center", // Center text inside the button
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 18,
    fontWeight: "bold",
  },
});
