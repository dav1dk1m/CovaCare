import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Logo } from "../components/common/components/Logo";
import colors from "../../constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="emergencyContacts"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
        },
        headerStyle: {
          height: 115,
          backgroundColor: colors.background.primary,
        },
        headerTitleAlign: "left",
        headerTitleContainerStyle: {
          justifyContent: "flex-end",
          paddingBottom: 10,
          paddingLeft: 8,
        },
        headerRightContainerStyle: {
          paddingRight: 8,
        },
        headerRight: () => <Logo />,
      }}
    >
      <Tabs.Screen
        name="emergencyContacts"
        options={{
          title: "Emergency Contacts",
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" color={color} size={24} />
          ),
        }}
      />
      {/* Disable Settings Tabs - Temporarily */}
      <Tabs.Screen
        name="cameras"
        options={{
          title: "Cameras",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="video-camera" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
