import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";

import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import About from "../screens/About";
import Profile from "../screens/Profile";
import EquipProductListScreen from "../screens/EquipProductListScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import SubCategoryScreen from "../screens/SubCategoryScreen";

import QSubCategoryScreen from "../screens/QSubCategoryScreen";
import QuickProductListScreen from "../screens/QuickProductListScreen";

import FavouriteDetail from "../screens/FavouriteDetail";
import FavouriteSeeAll from "../screens/FavouriteSeeAll";

import RentDetail from "../screens/RentDetail";
import RentSeeAll from "../screens/RentSeeAll";

import EquipmentDetail from "../screens/EquipmentDetail";
import EquipmentAll from "../screens/EquipmentAll";


const MainStack = createStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="EquipProductListScreen" component={EquipProductListScreen} />
      <MainStack.Screen name="ProductListScreen" component={ProductListScreen} />
      <MainStack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      <MainStack.Screen name="SubCategoryScreen" component={SubCategoryScreen} />
      <MainStack.Screen name="QSubCategoryScreen" component={QSubCategoryScreen} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="QuickProductListScreen" component={QuickProductListScreen} />
      <MainStack.Screen name="FavouriteDetail" component={FavouriteDetail} />
      <MainStack.Screen name="FavouriteSeeAll" component={FavouriteSeeAll} />
      <MainStack.Screen name="RentDetail" component={RentDetail} />
      <MainStack.Screen name="RentSeeAll" component={RentSeeAll} />
      <MainStack.Screen name="EquipmentDetail" component={EquipmentDetail} />
      <MainStack.Screen name="EquipmentAll" component={EquipmentAll} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="New Product On Sale" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-notifications-circle"} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="About" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-information-circle"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
