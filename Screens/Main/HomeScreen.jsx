import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTab = createBottomTabNavigator();

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { TouchableWithoutFeedback, Image, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveBackgroundColor: "#FFFFFF",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarStyle: {
          position: "absolute",
          height: 60,
          paddingHorizontal: 60,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderColor: "#FFFFFF",
        },
        tabBarItemStyle: { borderRadius: 30 },
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          title: "Публикации",
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            fontSize: 17,
          },
          headerRight: () => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Login")}
            >
              <View style={{ paddingHorizontal: 15 }}>
                <Image
                  source={require("../../assets/images/log-out.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name="add" size={size} color={color} />
          ),
          title: "Создать публикацию",
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            fontSize: 17,
          },
          headerLeft: () => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Home")}
            >
              <View style={{ paddingHorizontal: 15 }}>
                <Image
                  source={require("../../assets/images/arrow-left.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
          title: "",
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default HomeScreen;
