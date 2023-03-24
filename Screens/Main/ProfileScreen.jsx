import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        source={require("../../assets/images/Photo%20BG.jpg")}
      >
        <View style={styles.box}>
          <View style={styles.avatarBox}>
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.btnPlus} activeOpacity={0.7}>
                <View>
                  <Image
                    source={require("../../assets/images/del.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login")}
          >
            <View style={styles.autBtn}>
              <Image
                source={require("../../assets/images/log-out.png")}
                style={{ width: 24, height: 24 }}
              />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.userName}>Profile Screen</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    marginTop: 140,
    height: "100%",
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
  avatarBox: {
    position: "relative",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    top: -60,
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnPlus: {
    position: "absolute",
    top: 70,
    left: 100,
  },
  autBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  userName: {
    marginTop: 92,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: 30,
  },
});
