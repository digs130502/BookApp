import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FindStackParamList } from "../App"; // Adjust path as necessary

type Props = NativeStackScreenProps<FindStackParamList, "Find">;

const mockBooks = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://via.placeholder.com/100x150?text=Gatsby",
    description:
      "A classic novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
    price: "$10.99",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    image: "https://via.placeholder.com/100x150?text=1984",
    description:
      "A dystopian novel that delves into totalitarianism, surveillance, and the suppression of individuality.",
    price: "$8.99",
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://via.placeholder.com/100x150?text=Mockingbird",
    description:
      "A powerful exploration of racial injustice and moral growth in the American South.",
    price: "$9.99",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://via.placeholder.com/100x150?text=Pride",
    description:
      "A romantic comedy about manners and misunderstandings in Regency-era England.",
    price: "$11.99",
  },
  {
    id: "5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://via.placeholder.com/100x150?text=Hobbit",
    description:
      "A fantasy adventure following Bilbo Baggins on a journey to reclaim a treasure guarded by a dragon.",
    price: "$12.99",
  },
];

export default function FindScreen({ navigation }: Props) {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text === "") {
      setFilteredBooks(mockBooks);
    } else {
      const filtered = mockBooks.filter((book) =>
        book.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Books</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a book..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() =>
              navigation.navigate("Book Details", {
                title: item.title,
                author: item.author,
                image: item.image,
                description: item.description,
                price: item.price,
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <View>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No books found.</Text>
        }
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
    marginBottom: 10,
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  bookItem: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#555",
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
    marginTop: 20,
  },
  bookImage: {
    width: 50,
    height: 75,
    marginRight: 10,
    borderRadius: 5,
  },
});
