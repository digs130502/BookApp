import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FindStackParamList } from "../App"; // Adjust path as necessary

type Props = NativeStackScreenProps<FindStackParamList, "Book Details">;

export default function BookDetailsScreen({ route }: Props) {
  const { title, author, image, description, price } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const shelves = ["To Read", "Read", "Currently Reading"];

  const handleAddToShelf = (shelf: string) => {
    setModalVisible(false);
    alert(`"${title}" added to "${shelf}" shelf!`);
    // Here, you can add logic to update the shelf in your state or backend
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{title}</Text>
      <Text style={styles.bookAuthor}>by {author}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Price: {price}</Text>
      <TouchableOpacity
        style={styles.purchaseButton}
        onPress={() => alert("Purchase successful!")}
      >
        <Text style={styles.purchaseButtonText}>Buy Now</Text>
      </TouchableOpacity>

      {/* Add to Shelf Button */}
      <TouchableOpacity
        style={styles.addToShelfButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addToShelfButtonText}>Add to Shelf</Text>
      </TouchableOpacity>

      {/* Modal for Selecting a Shelf */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add to Shelf</Text>
            <FlatList
              data={shelves}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.shelfOption}
                  onPress={() => handleAddToShelf(item)}
                >
                  <Text style={styles.shelfOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bookImage: {
    width: 150,
    height: 225,
    marginBottom: 20,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  bookAuthor: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  purchaseButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  purchaseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  addToShelfButton: {
    backgroundColor: "#28A745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addToShelfButtonText: {
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
  shelfOption: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  shelfOptionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FF4136",
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
