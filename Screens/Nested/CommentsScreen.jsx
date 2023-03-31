import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const CommentsScreen = ({ route, navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [comment, setComment] = useState("");

  const commentHandler = (text) => setComment(text);

  useEffect(() => {
    if (route.params) {
      setPhoto(route.params.photo);
    }
  }, [route.params]);

  const onFocus = () => {
    setIsShowKeyboard(true);
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("DefaultScreen");
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 14,
            }}
          >
            <Image
              source={require("../../assets/images/arrow-left.png")}
              style={{ width: 23, height: 23 }}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.headerText}>Комментарии</Text>
      </View>
      <ScrollView>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View>
              {photo && (
                <View>
                  <View style={styles.imgBox}>
                    <Image style={styles.img} source={{ uri: photo }} />
                  </View>
                </View>
              )}
              <Text>
                If you don't receive the locations in the emulator, you may have
                to turn off "Improve Location Accuracy" in Settings - Location
                in the emulator. This will turn off Wi-Fi location and only use
                GPS. Then you can manipulate the location with GPS data through
                the emulator. If you don't receive the locations in the
                emulator, you may have to turn off "Improve Location Accuracy"
                in Settings - Location in the emulator. This will turn off Wi-Fi
                location and only use GPS. Then you can manipulate the location
                with GPS data through the emulator. If you don't receive the
                locations in the emulator, you may have to turn off "Improve
                Location Accuracy" in Settings - Location in the emulator. This
                will turn off Wi-Fi location and only use GPS. Then you can
                manipulate the location with GPS data through the emulator.
              </Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={styles.inputBox}>
        <TextInput
          value={comment}
          onChangeText={commentHandler}
          placeholder="Комментировать..."
          style={styles.input}
          onFocus={onFocus}
        />
      </View>
    </>
  );
};
export default CommentsScreen;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    height: 90,
    borderBottomWidth: 2,
    borderBottomColor: "#E8E8E8",
    backgroundColor: "#fff",
  },
  headerText: {
    marginBottom: 15,
    marginLeft: 20,
    fontFamily: "Roboto-Bold",
    fontSize: 17,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    marginBottom: 130,
  },
  imgBox: {
    height: 240,
    marginBottom: 22,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
  inputBox: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    width: "100%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
  },
});
