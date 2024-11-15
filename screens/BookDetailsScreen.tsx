import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FindStackParamList } from "../App"; // Adjust path as necessary

type Props = NativeStackScreenProps<FindStackParamList, "Book Details">;

export default function BookDetailsScreen({ route }: Props) {
  const { title, author, image, description, price } = route.params;

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
  },
  purchaseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
