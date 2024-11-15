import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MyBooksStackParamList } from "../App"; // Adjust path if necessary

type Props = NativeStackScreenProps<MyBooksStackParamList, "Book List">;

export default function BookListScreen({ route }: Props) {
  const { books, category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Image source={item.image} style={styles.bookImage} />
            <View style={styles.bookDetails}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>by {item.author}</Text>
              <Text style={styles.bookDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  bookItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 8,
  },
  bookImage: {
    width: 50,
    height: 75,
    marginRight: 10,
    borderRadius: 5,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#555",
  },
  bookDescription: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
});
