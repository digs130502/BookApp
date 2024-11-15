import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DiscoverStackParamList } from "../App"; // Adjust the path as necessary

type Props = NativeStackScreenProps<DiscoverStackParamList, "Discover">;

const trends = [
  {
    id: "1",
    title: "Best Sellers",
    books: [
      {
        id: "1",
        title: "The Great Gatsby",
        cover: "https://via.placeholder.com/100x150?text=Gatsby",
        description:
          "A classic novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
        author: "F. Scott Fitzgerald",
        price: "$10.99",
      },
      {
        id: "2",
        title: "1984",
        cover: "https://via.placeholder.com/100x150?text=1984",
        description:
          "A dystopian novel that delves into totalitarianism, surveillance, and the suppression of individuality.",
        author: "George Orwell",
        price: "$8.99",
      },
      {
        id: "3",
        title: "The Hobbit",
        cover: "https://via.placeholder.com/100x150?text=Hobbit",
        description:
          "A fantasy adventure following Bilbo Baggins on a journey to reclaim a treasure guarded by a dragon.",
        author: "J.R.R. Tolkien",
        price: "$12.99",
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
        description:
          "A lone astronaut must save Earth in this gripping and surprising space adventure.",
        author: "Andy Weir",
        price: "$15.99",
      },
      {
        id: "5",
        title: "Klara and the Sun",
        cover: "https://via.placeholder.com/100x150?text=Klara",
        description:
          "A dystopian story of love and humanity seen through the eyes of an AI robot.",
        author: "Kazuo Ishiguro",
        price: "$14.99",
      },
      {
        id: "6",
        title: "Malibu Rising",
        cover: "https://via.placeholder.com/100x150?text=Malibu",
        description:
          "A family drama centered on the lives of the Riva siblings and their annual summer party.",
        author: "Taylor Jenkins Reid",
        price: "$13.99",
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
        description:
          "The first volume of Barack Obama's memoir chronicling his political journey.",
        author: "Barack Obama",
        price: "$25.99",
      },
      {
        id: "8",
        title: "The Night Watchman",
        cover: "https://via.placeholder.com/100x150?text=Watchman",
        description:
          "A poignant novel about Native American struggles and resilience.",
        author: "Louise Erdrich",
        price: "$17.99",
      },
      {
        id: "9",
        title: "The Overstory",
        cover: "https://via.placeholder.com/100x150?text=Overstory",
        description:
          "A tale of intertwined lives, each connected by their shared love of trees.",
        author: "Richard Powers",
        price: "$18.99",
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
        description:
          "A powerful retelling of the mythological tale of Circe, the witch of Aiaia.",
        author: "Madeline Miller",
        price: "$16.99",
      },
      {
        id: "11",
        title: "Where the Crawdads Sing",
        cover: "https://via.placeholder.com/100x150?text=Crawdads",
        description:
          "A haunting mystery set in the marshlands of North Carolina.",
        author: "Delia Owens",
        price: "$14.99",
      },
      {
        id: "12",
        title: "Educated",
        cover: "https://via.placeholder.com/100x150?text=Educated",
        description:
          "A memoir of a woman who grows up in a survivalist family and pursues education against all odds.",
        author: "Tara Westover",
        price: "$13.99",
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
        description:
          "A sci-fi epic that tells the story of Paul Atreides and the desert planet Arrakis.",
        author: "Frank Herbert",
        price: "$11.99",
      },
      {
        id: "14",
        title: "Foundation",
        cover: "https://via.placeholder.com/100x150?text=Foundation",
        description:
          "A saga about the fall and rise of civilizations in the galaxy.",
        author: "Isaac Asimov",
        price: "$9.99",
      },
      {
        id: "15",
        title: "Ender’s Game",
        cover: "https://via.placeholder.com/100x150?text=Enders+Game",
        description:
          "A young genius is trained to battle an alien threat in this sci-fi classic.",
        author: "Orson Scott Card",
        price: "$10.99",
      },
    ],
  },
  {
    id: "6",
    title: "Classics You’ll Love",
    books: [
      {
        id: "16",
        title: "Moby Dick",
        cover: "https://via.placeholder.com/100x150?text=Moby+Dick",
        description: "The epic tale of a man's obsession with a white whale.",
        author: "Herman Melville",
        price: "$8.99",
      },
      {
        id: "17",
        title: "Little Women",
        cover: "https://via.placeholder.com/100x150?text=Little+Women",
        description: "A heartwarming story of the March sisters growing up.",
        author: "Louisa May Alcott",
        price: "$7.99",
      },
      {
        id: "18",
        title: "Jane Eyre",
        cover: "https://via.placeholder.com/100x150?text=Jane+Eyre",
        description:
          "A gothic romance about a young governess and her mysterious employer.",
        author: "Charlotte Brontë",
        price: "$9.99",
      },
    ],
  },
  {
    id: "7",
    title: "Fantasy Favorites",
    books: [
      {
        id: "19",
        title: "The Name of the Wind",
        cover: "https://via.placeholder.com/100x150?text=Name+of+the+Wind",
        description:
          "The story of a gifted young man on his journey to become a legend.",
        author: "Patrick Rothfuss",
        price: "$12.99",
      },
      {
        id: "20",
        title: "The Way of Kings",
        cover: "https://via.placeholder.com/100x150?text=Way+of+Kings",
        description:
          "An epic fantasy about a shattered world and the heroes who rise to defend it.",
        author: "Brandon Sanderson",
        price: "$14.99",
      },
      {
        id: "21",
        title: "Mistborn",
        cover: "https://via.placeholder.com/100x150?text=Mistborn",
        description:
          "A band of rebels seeks to overthrow an immortal tyrant using magical powers.",
        author: "Brandon Sanderson",
        price: "$11.99",
      },
    ],
  },
];

export default function DiscoverScreen({ navigation }: Props) {
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
              <TouchableOpacity
                style={styles.bookContainer}
                onPress={() =>
                  navigation.navigate("Book Details", {
                    title: item.title,
                    author: item.author,
                    image: item.cover,
                    description: item.description,
                    price: item.price,
                  })
                }
              >
                <Image source={{ uri: item.cover }} style={styles.bookImage} />
                <Text style={styles.bookTitle}>{item.title}</Text>
              </TouchableOpacity>
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
