import React from "react";
// import { Dimensions } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Platform, SafeAreaView } from "react-native";
import SignIn from "./auth/signin/SignIn";
import ForgotPassword from "./auth/forgot-password/ForgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import ResetPassword from "./auth/reset-password/ResetPassword";
import Home from "./dashboard/Home";
import Dashboard from "./dashboard/Dashboard";
import AppStorage from "../utils/AppStorage";
import { Box, Divider, Text, Heading, useTheme, VStack } from "native-base";



function AppRouter({ theme }: any) {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer linking={{ enabled: true, prefixes: [] }} theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
        initialRouteName="SignIn"
        defaultStatus={"closed"}
        // drawerContent={() => null}
      >
        <Drawer.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }} />
        <Drawer.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: "Forgot Password" }} />
        <Drawer.Screen name="ResetPassword" component={ResetPassword} options={{ title: "Reset Password" }} />
        <Drawer.Screen name="AppHome" component={AppDrawer} options={{ title: "Home" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const AppDrawer = (props: any) => {
    let theme: any = useTheme();
  const Drawer = createDrawerNavigator();
  const isWeb = Platform && Platform.OS === "web" ? true : false;
  console.log(props);
  console.log("useTheme :: ", theme.dark)
  return (
    <Drawer.Navigator
      {...props}
      screenOptions={{
        headerShown: true,
        headerTintColor:  theme.dark == true ? "white": "black",
      }}
      initialRouteName="Dashboard"
      defaultStatus={"closed"}
      drawerContent={(props: any) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

const DrawerContent = (props: any) => (
  <SafeAreaView>
    <DrawerContentScrollView {...props} safeArea placement="left">
      <VStack divider={<Divider />} space="1">
        <Box px="4" my={4}>
          <Heading bold fontSize="lg">
            AppName
          </Heading>
        </Box>

        <DrawerItem label="DashBoard" onPress={() => props.navigation.navigate("Dashboard")} />
        <DrawerItem label="Home" onPress={() => props.navigation.navigate("Home")} />
        <DrawerItem
          label="Sign Out"
          onPress={async () => {
            await AppStorage.clearData();
            props.navigation.navigate("SignIn");
          }}
        />
      </VStack>
    </DrawerContentScrollView>
  </SafeAreaView>
);

export default AppRouter;
