import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

const trends = [
  {
    id: "1",
    title: "Best Sellers",
    books: [
      {
        id: "1",
        title: "The Great Gatsby",
        cover: "https://via.placeholder.com/100x150?text=Gatsby",
      },
      {
        id: "2",
        title: "1984",
        cover: "https://via.placeholder.com/100x150?text=1984",
      },
      {
        id: "3",
        title: "The Hobbit",
        cover: "https://via.placeholder.com/100x150?text=Hobbit",
      },
    ],
  },
  {
    id: "2",
    title: "New Releases",
    books: [
      {
        id: "4",
        title: "Project Hail Mary",
        cover: "https://via.placeholder.com/100x150?text=Hail+Mary",
      },
      {
        id: "5",
        title: "Klara and the Sun",
        cover: "https://via.placeholder.com/100x150?text=Klara",
      },
      {
        id: "6",
        title: "Malibu Rising",
        cover: "https://via.placeholder.com/100x150?text=Malibu",
      },
    ],
  },
  {
    id: "3",
    title: "Award Winners",
    books: [
      {
        id: "7",
        title: "A Promised Land",
        cover: "https://via.placeholder.com/100x150?text=Promised+Land",
      },
      {
        id: "8",
        title: "The Night Watchman",
        cover: "https://via.placeholder.com/100x150?text=Watchman",
      },
      {
        id: "9",
        title: "The Overstory",
        cover: "https://via.placeholder.com/100x150?text=Overstory",
      },
    ],
  },
  {
    id: "4",
    title: "Editor’s Picks",
    books: [
      {
        id: "10",
        title: "Circe",
        cover: "https://via.placeholder.com/100x150?text=Circe",
      },
      {
        id: "11",
        title: "Where the Crawdads Sing",
        cover: "https://via.placeholder.com/100x150?text=Crawdads",
      },
      {
        id: "12",
        title: "Educated",
        cover: "https://via.placeholder.com/100x150?text=Educated",
      },
    ],
  },
  {
    id: "5",
    title: "Trending Genres: Sci-Fi",
    books: [
      {
        id: "13",
        title: "Dune",
        cover: "https://via.placeholder.com/100x150?text=Dune",
      },
      {
        id: "14",
        title: "Foundation",
        cover: "https://via.placeholder.com/100x150?text=Foundation",
      },
      {
        id: "15",
        title: "Ender’s Game",
        cover: "https://via.placeholder.com/100x150?text=Enders+Game",
      },
    ],
  },
  {
    id: "6",
    title: "Trending Genres: Fantasy",
    books: [
      {
        id: "16",
        title: "The Name of the Wind",
        cover: "https://via.placeholder.com/100x150?text=Name+of+the+Wind",
      },
      {
        id: "17",
        title: "The Way of Kings",
        cover: "https://via.placeholder.com/100x150?text=Way+of+Kings",
      },
      {
        id: "18",
        title: "Mistborn",
        cover: "https://via.placeholder.com/100x150?text=Mistborn",
      },
    ],
  },
  {
    id: "7",
    title: "Classics You’ll Love",
    books: [
      {
        id: "19",
        title: "Moby Dick",
        cover: "https://via.placeholder.com/100x150?text=Moby+Dick",
      },
      {
        id: "20",
        title: "Little Women",
        cover: "https://via.placeholder.com/100x150?text=Little+Women",
      },
      {
        id: "21",
        title: "Jane Eyre",
        cover: "https://via.placeholder.com/100x150?text=Jane+Eyre",
      },
    ],
  },
];

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Discover Trends</Text>
      {trends.map((trend) => (
        <View key={trend.id} style={styles.trendContainer}>
          <Text style={styles.trendTitle}>{trend.title}</Text>
          <FlatList
            horizontal
            data={trend.books}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.bookContainer}>
                <Image source={{ uri: item.cover }} style={styles.bookImage} />
                <Text style={styles.bookTitle}>{item.title}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </ScrollView>
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
  trendContainer: {
    marginBottom: 30,
  },
  trendTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bookContainer: {
    marginRight: 15,
    alignItems: "center",
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  bookTitle: {
    fontSize: 12,
    textAlign: "center",
    maxWidth: 100,
  },
});
