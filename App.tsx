import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MyBooksScreen from "./screens/MyBooksScreen";
import FindScreen from "./screens/FindScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookListScreen from "./screens/BookListScreen"; // Screen for displaying book lists
import BookDetailsScreen from "./screens/BookDetailsScreen"; // Screen for displaying book details

// Param List for My Books stack
export type MyBooksStackParamList = {
  "My Books Home": undefined;
  "Book List": {
    books: Array<{ id: string; title: string; author: string }>;
    category: string;
  };
};

// Param List for Find stack
export type FindStackParamList = {
  Find: undefined;
  "Book Details": {
    title: string;
    author: string;
    image: string;
    description: string;
    price: string;
  };
};

const Tab = createBottomTabNavigator();
const MyBooksStack = createStackNavigator<MyBooksStackParamList>();
const FindStack = createStackNavigator<FindStackParamList>();

// MyBooksStackNavigator
function MyBooksStackNavigator() {
  return (
    <MyBooksStack.Navigator>
      <MyBooksStack.Screen name="My Books Home" component={MyBooksScreen} />
      <MyBooksStack.Screen name="Book List" component={BookListScreen} />
    </MyBooksStack.Navigator>
  );
}

// FindStackNavigator
function FindStackNavigator() {
  return (
    <FindStack.Navigator>
      <FindStack.Screen name="Find" component={FindScreen} />
      <FindStack.Screen name="Book Details" component={BookDetailsScreen} />
    </FindStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Books" component={MyBooksStackNavigator} />
        <Tab.Screen name="Find" component={FindStackNavigator} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
