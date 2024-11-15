import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MyBooksStackParamList } from "../App"; // Adjust path as needed

type Props = NativeStackScreenProps<MyBooksStackParamList, "My Books Home">;

export default function MyBooksScreen({ navigation }: Props) {
  const bookCategories = {
    toRead: [
      { id: "1", title: "The Catcher in the Rye", author: "J.D. Salinger" },
      { id: "2", title: "The Road", author: "Cormac McCarthy" },
    ],
    read: [
      { id: "3", title: "Sapiens", author: "Yuval Noah Harari" },
      { id: "4", title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
    ],
    currentlyReading: [
      { id: "5", title: "Atomic Habits", author: "James Clear" },
      { id: "6", title: "The Lean Startup", author: "Eric Ries" },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Books</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Book List", {
            books: bookCategories.toRead,
            category: "To Read",
          })
        }
      >
        <Text style={styles.buttonText}>To Read</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Book List", {
            books: bookCategories.read,
            category: "Read",
          })
        }
      >
        <Text style={styles.buttonText}>Read</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Book List", {
            books: bookCategories.currentlyReading,
            category: "Currently Reading",
          })
        }
      >
        <Text style={styles.buttonText}>Currently Reading</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
