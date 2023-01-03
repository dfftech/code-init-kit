import React from "react";
// import { Dimensions } from "react-native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { Platform, SafeAreaView } from "react-native";
import SignIn from "../modules/auth/signin/SignIn";
import ForgotPassword from "../modules/auth/forgot-password/ForgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import ResetPassword from "../modules/auth/reset-password/ResetPassword";
import Home from "../modules/dashboard/Home";
import Dashboard from "../modules/dashboard/Dashboard";
import AppStorage from "./AppStorage";
import { Drawer, Text, useTheme } from "native-base";

const Stack = createDrawerNavigator();

function AppRouter({ theme }: any) {
  return (
    <NavigationContainer linking={{ enabled: true, prefixes: [] }} theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
        initialRouteName="SignIn"
        defaultStatus={"closed"}
        // drawerContent={() => null}
      >
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: "Forgot Password" }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: "Reset Password" }} />
        <Stack.Screen name="AppHome" component={AppDrawer} options={{ title: "Home" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppDrawer = (props: any) => {
  const theme = useTheme();
  const isWeb = Platform && Platform.OS === "web" ? true : false;
  console.log(props);
  return (
    <Stack.Navigator
      {...props}
      screenOptions={{
        style: { backgroundColor: "red" },
        headerShown: true,
        //  headerTintColor: theme[""],
      }}
      initialRouteName="Dashboard"
      defaultStatus={"closed"}
      drawerContent={(props: any) => <DrawerContent {...props} />}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const DrawerContent = (props: any) => (
  <SafeAreaView>
    <Text style={{ padding: 8 }} size="lg">
      {"AppName"}
    </Text>
    <Drawer isOpen={false}>
      <DrawerItem label="DashBoard" onPress={() => props.navigation.navigate("Dashboard")} />
      <DrawerItem label="Home" onPress={() => props.navigation.navigate("Home")} />
      <DrawerItem
        label="Sign Out"
        onPress={async () => {
          await AppStorage.clearData();
          props.navigation.navigate("SignIn");
        }}
      />
    </Drawer>
  </SafeAreaView>
);

export default AppRouter;
