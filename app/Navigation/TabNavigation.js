import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CreatePost from "../Screens/CreatePost";
import Feed from "../Screens/Feed";
import Octicons from "react-native-vector-icons/Octicons";
import { Header } from "react-native/Libraries/NewAppScreen";

const Tab = createMaterialBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting
      barStyle={{ backgroundColor: "#aec9b9" }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => <Octicons name="mail" size={20} />,
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarIcon: () => <Octicons name="plus-circle" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}
