import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const DefaultScreenPosts = ({ navigation, route }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      if (route.params.post) {
        setPosts((prevState) => [...prevState, route.params.post]);
      }
      if (route.params.email) {
        setUser(route.params.email);
      }
    }
  }, [route.params]);

  if (user || posts) {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>Публикации</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login")}
          >
            <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
              <Image
                source={require("../../assets/images/log-out.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.container}>
          <View style={styles.user}>
            <View style={styles.avatar}></View>
            <View>
              <Text style={styles.name}>User name</Text>
              <Text style={styles.email}>User email {user}</Text>
            </View>
          </View>
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <View style={styles.imgBox}>
                  <Image style={styles.img} source={{ uri: item.photo }} />
                </View>
                <Text style={styles.title}>
                  {item.name ? item.name : "Название публикации"}
                </Text>
                <View style={styles.descriptionBox}>
                  <View style={styles.iconBox}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        const { photo } = item;
                        navigation.navigate("Comments", { photo });
                      }}
                    >
                      <View style={{ ...styles.iconBox, marginRight: 24 }}>
                        <Image
                          source={require("../../assets/images/message-circle.png")}
                          style={{ width: 24, height: 24, marginRight: 4 }}
                        />
                        <Text style={styles.text}>8</Text>
                      </View>
                    </TouchableOpacity>

                    <View style={styles.iconBox}>
                      <Image
                        source={require("../../assets/images/thumbs-up.png")}
                        style={{ width: 24, height: 24, marginRight: 4 }}
                      />
                      <Text style={styles.text}>153</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      const { loc, name } = item;
                      navigation.navigate("Map", { loc, name });
                    }}
                  >
                    <View style={styles.iconBox}>
                      <Image
                        source={require("../../assets/images/map-pin.png")}
                        style={{ width: 24, height: 24, marginRight: 4 }}
                      />
                      <Text
                        style={{
                          ...styles.text,
                          textDecorationLine: "underline",
                        }}
                      >
                        {item.place ? item.place : "Посмотреть на карте"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </>
    );
  }
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публикации</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
            <Image
              source={require("../../assets/images/log-out.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.container}>
        <Text>Публикации</Text>
        <View style={styles.user}>
          <View style={styles.avatar}></View>
          <View>
            <Text style={styles.name}>User name</Text>
            <Text style={styles.email}>User email</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DefaultScreenPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 40,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 90,
    borderBottomWidth: 2,
    borderBottomColor: "#E8E8E8",
    backgroundColor: "#fff",
  },
  headerText: {
    marginBottom: 15,
    marginLeft: 16,
    fontFamily: "Roboto-Bold",
    fontSize: 17,
  },
  user: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 32,
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
  imgBox: {
    height: 240,
    marginBottom: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    marginBottom: 8,
  },
  descriptionBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
  },
});
