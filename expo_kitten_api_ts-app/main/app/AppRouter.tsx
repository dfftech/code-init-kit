import React from "react";
// import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Platform, SafeAreaView} from "react-native";
import SignIn from "../pages/auth/SignIn";
import ForgotPassword from "../pages/auth/ForgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import ResetPassword from "../pages/auth/ResetPassword";
import Home from "../pages/dashboard/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import {Divider, Drawer, DrawerItem, IndexPath, Text, useTheme} from "@ui-kitten/components";
import AppStorage from "./AppStorage";

const Stack = createDrawerNavigator();

function AppRouter({ theme } : any) {
  return (
    <NavigationContainer linking={{enabled: true, prefixes:[]}} theme={theme}>
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
              headerTitleAlign: "center"
          }}
        initialRouteName="SignIn"
        defaultStatus={'closed'}
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
  console.log(props)
  return (
    <Stack.Navigator
        {...props}
        screenOptions={{
            style: { backgroundColor: 'red' },
            headerShown: true,
            headerTintColor: theme['color-primary-default'],
        }}
      initialRouteName="Dashboard"
      defaultStatus={'closed'}
      drawerContent={(props: any) => <DrawerContent {...props} />}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const DrawerContent = ( props: any) => (
  <SafeAreaView>
      <Text style={{ padding: 8 }} category={"h4"}> {"AppName"}</Text>
    <Drawer>
      <DrawerItem title="DashBoard" onPress={() => props.navigation.navigate("Dashboard")} />
      <DrawerItem title="Home" onPress={() => props.navigation.navigate("Home")} />
      <DrawerItem
        title="Sign Out"
        onPress={async () => {
          await AppStorage.clearData();
            props.navigation.navigate("SignIn");
        }}
      />
    </Drawer>
  </SafeAreaView>
);

export default AppRouter;
