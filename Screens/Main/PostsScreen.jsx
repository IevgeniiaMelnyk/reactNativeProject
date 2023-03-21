import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostsScreen = ({ route }) => {
  const { email } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.avatar}></View>
        <View>
          <Text style={styles.name}>User name</Text>
          <Text style={styles.email}>User email {email}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  user: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 16,
    marginRight: 8,
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  email: {
    fontFamily: "Roboto-Regulat",
    fontSize: 11,
  },
});
