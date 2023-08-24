import { React, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import ScreenNames from "./routes";
import { selectIsLoggedIn } from "~redux/slices/user";
import { LoginScreen, SignUpScreen } from "~screens/auth";
import { HomeScreen } from "~screens/app";
import { Loader } from "~components";
import SplashScreen from "react-native-splash-screen";
import { db } from "~index";
import { store } from "~redux";
const Stack = createNativeStackNavigator();

export default function Routes() {
  useEffect(() => {
    SplashScreen.hide();
    const persistedUserId = store.getState().user?.userMeta?.id;

    console.log(persistedUserId);
  }, []);

  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.LOGIN}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
          <Stack.Screen
            name={ScreenNames.SIGNUPSCREEN}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
