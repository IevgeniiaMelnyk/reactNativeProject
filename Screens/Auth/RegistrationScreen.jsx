import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";

const RegistrationScreen = ({ navigation, route }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    const user = { login, email, password };
    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("Home", { screen: "Posts", params: user });
  };

  const onFocus = () => {
    setIsShowKeyboard(true);
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/images/Photo%20BG.jpg")}
    >
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? -140 : 0,
            }}
          >
            <View style={styles.avatarBox}>
              <View style={styles.avatar}>
                <TouchableOpacity
                  style={styles.btnPlus}
                  activeOpacity={0.7}
                  onPress={onLogin}
                >
                  <Text style={styles.btnPlusText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.title}>Регистрация</Text>
            <TextInput
              value={login}
              onChangeText={loginHandler}
              placeholder="Логин"
              style={styles.input}
              onFocus={onFocus}
            />
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Адрес электронной почты"
              style={styles.input}
              onFocus={onFocus}
            />
            <View>
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                secureTextEntry={hidePass ? true : false}
                style={styles.input}
                onFocus={onFocus}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setHidePass(!hidePass)}
                style={styles.passwordBtn}
              >
                <Text style={styles.passwordText}>Показать</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.7}
              onPress={onLogin}
            >
              <Text style={styles.btnText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.text}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: 30,

    marginTop: 92,
    marginBottom: 32,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    marginHorizontal: 16,
    borderRadius: 100,
    marginTop: 27,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
  },

  text: {
    textAlign: "center",
    marginBottom: 45,
    color: "#1B4371",
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
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
    top: 80,
    left: 107,
    alignItems: "center",
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  btnPlusText: {
    color: "#FF6C00",
    fontSize: 16,
  },
  passwordBtn: {
    position: "absolute",
    top: 13,
    right: 34,
  },
  passwordText: {
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
  },
});
