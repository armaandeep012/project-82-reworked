import react from "react";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import TabNav from "./TabNavigation";
import Profile from "../Screens/Profile";
import Octicons from "react-native-vector-icons/Octicons";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#aec9b9" },
        drawerActiveBackgroundColor: "#006b5c",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNav}
        options={{
          drawerIcon: () => <Octicons name="home" size={20} color="#aec9b9" />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Octicons name="person" size={20} color="#aec9b9" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
