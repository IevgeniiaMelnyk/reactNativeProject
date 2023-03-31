import React, { useState, useCallback, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { View, Alert } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

SplashScreen.preventAutoHideAsync();

import { useRoute } from "./router";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(uid);
      console.log(user);
    } else {
      Alert.alert("Пожалуйста, авторизируйтесь");
    }
  });

  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <View
        style={{ flex: 1, backgroundColor: "#fff" }}
        onLayout={onLayoutRootView}
      >
        <NavigationContainer>{routing}</NavigationContainer>
      </View>
    </Provider>
  );
}
