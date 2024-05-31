import { Image, StyleSheet } from "react-native";
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import MainScreen from "./screens/MainScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import SearchScreen from "./screens/SearchScreen";
import PlusScreen from "./screens/PlusScreen";
import ReelScreen from "./screens/ReelScreen";
import ProfileScreen from "./screens/ProfileScreen";

//icons
import home from "../assets/icons/home-outline.png";
import homeFill from "../assets/icons/home-fill.png";
import search from "../assets/icons/search.png";
import searchStroke from "../assets/icons/search-stroke.png";
import plus from "../assets/icons/plus.png";
import reel from "../assets/icons/reel.png";
import reelFill from "../assets/icons/reel-fill.png";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: "black",
          borderTopColor: "gray",
          position: "absolute",
          bottom: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: "bottom",
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff", // Active tab text color
        tabBarInactiveTintColor: "#ffffff", // Inactive tab text color
      }}
    >
      <Tab.Screen
        name="main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? homeFill : home}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
          tabBarHideOnKeyboard: true,
          adaptive: true,
          safeAreaInset: {
            bottom: "always",
          },
          tabBarLabelPosition: "bottom",
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? searchStroke : search}
              style={{ tintColor: color, width: 27, height: 27 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="plus"
        component={PlusScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={plus}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? reelFill : reel}
              style={{ tintColor: color, width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={{
                uri: "https://i.pinimg.com/474x/eb/d7/71/ebd7712b9dc2423eb182f91b3120dab5.jpg",
              }}
              style={[
                { height: 25, width: 25, borderRadius: 12 },
                focused && { borderWidth: 2, borderColor: "white" },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Use horizontal slide transition
          gestureEnabled: true,
          gestureDirection: "horizontal",
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 300,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 300,
              },
            },
          },
        }}
      >
        <Stack.Screen name="tab" component={MainTabNavigator} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
