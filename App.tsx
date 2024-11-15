import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MyBooksScreen from "./screens/MyBooksScreen";
import FindScreen from "./screens/FindScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookListScreen from "./screens/BookListScreen"; // Screen for displaying book lists

export type MyBooksStackParamList = {
  "My Books Home": undefined; // No parameters for this screen
  "Book List": {
    books: Array<{ id: string; title: string; author: string }>;
    category: string;
  }; // Parameters for Book List
};

const Tab = createBottomTabNavigator();
const MyBooksStack = createStackNavigator();

function MyBooksStackNavigator() {
  return (
    <MyBooksStack.Navigator>
      <MyBooksStack.Screen name="My Books Home" component={MyBooksScreen} />
      <MyBooksStack.Screen name="Book List" component={BookListScreen} />
    </MyBooksStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Books" component={MyBooksStackNavigator} />
        <Tab.Screen name="Find" component={FindScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
