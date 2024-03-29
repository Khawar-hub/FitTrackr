import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AddWorkout,
  HomeScreen,
  ProductDetail,
  Products,
} from "~screens/app";
import Home from "~assets/SVG/home";
import { AppColors } from "~utils";
import styles from "./styles";
import ScreenNames from "./routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Directory from "~assets/SVG/directory";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.HOME}
      screenOptions={{ header: () => false }}
    >
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen name={ScreenNames.ADDWORKOUT} component={AddWorkout} />
    </Stack.Navigator>
  );
};
const ProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.PRODUCTS}
      screenOptions={{ header: () => false }}
    >
      <Stack.Screen name={ScreenNames.PRODUCTS} component={Products} />
      <Stack.Screen
        name={ScreenNames.PRODUCTDETAIL}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};
export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarContainer,
        tabBarActiveTintColor: AppColors.black,
        tabBarInactiveTintColor: AppColors.wihte5,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <Home color={color} />,
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <Directory color={color} />,
        }}
        name="ProductStack"
        component={ProductStack}
      />
    </Tab.Navigator>
  );
}
