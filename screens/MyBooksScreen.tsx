import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MyBooksStackParamList } from "../App"; // Adjust path as needed

type Props = NativeStackScreenProps<MyBooksStackParamList, "My Books Home">;

export default function MyBooksScreen({ navigation }: Props) {
  const [bookCategories, setBookCategories] = useState({
    toRead: [
      {
        id: "1",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        image: require("../assets/book-covers/rye.png"),
        description: "A story about teenage rebellion and alienation.",
      },
      {
        id: "2",
        title: "The Road",
        author: "Cormac McCarthy",
        image: require("../assets/book-covers/road.png"),
        description: "A post-apocalyptic tale of survival and hope.",
      },
    ],
    read: [
      {
        id: "3",
        title: "Sapiens",
        author: "Yuval Noah Harari",
        image: require("../assets/book-covers/sapiens.png"),
        description: "A brief history of humankind.",
      },
      {
        id: "4",
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        image: require("../assets/book-covers/thinking.png"),
        description: "Exploring the two systems of thinking in our brains.",
      },
    ],
    currentlyReading: [
      {
        id: "5",
        title: "Atomic Habits",
        author: "James Clear",
        image: require("../assets/book-covers/atomic.png"),
        description: "An actionable guide to building better habits.",
      },
      {
        id: "6",
        title: "The Lean Startup",
        author: "Eric Ries",
        image: require("../assets/book-covers/lean.png"),
        description: "A revolutionary approach to business development.",
      },
    ],
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [newShelfName, setNewShelfName] = useState("");

  const createShelf = () => {
    if (newShelfName.trim()) {
      setBookCategories((prevCategories) => ({
        ...prevCategories,
        [newShelfName]: [],
      }));
      setNewShelfName("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Books</Text>

      {/* Category Buttons */}
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

      {/* Create New Shelf Button */}
      <TouchableOpacity
        style={[styles.button, styles.createButton]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Create New Shelf</Text>
      </TouchableOpacity>

      {/* Modal for Creating New Shelf */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Shelf</Text>
            <TextInput
              style={styles.input}
              placeholder="Shelf Name"
              value={newShelfName}
              onChangeText={setNewShelfName}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.modalButton]}
                onPress={createShelf}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.modalButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  createButton: {
    backgroundColor: "#28A745",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});
