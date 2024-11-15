import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const mockSettings = [
    {
      id: "1",
      label: "Account Settings",
      onPress: () => alert("Account Settings Clicked!"),
    },
    {
      id: "2",
      label: "Notifications",
      onPress: () => alert("Notifications Clicked!"),
    },
    {
      id: "3",
      label: "Privacy & Security",
      onPress: () => alert("Privacy & Security Clicked!"),
    },
    { id: "4", label: "Theme", onPress: () => alert("Theme Clicked!") },
    { id: "5", label: "About Us", onPress: () => alert("About Us Clicked!") },
    { id: "6", label: "Log Out", onPress: () => alert("Log Out Clicked!") },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {mockSettings.map((setting) => (
        <TouchableOpacity
          key={setting.id}
          style={styles.settingButton}
          onPress={setting.onPress}
        >
          <Text style={styles.settingText}>{setting.label}</Text>
        </TouchableOpacity>
      ))}
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
  settingButton: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  settingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
