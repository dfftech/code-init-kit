import * as React from "react";
import { StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp } from "react-native-responsive-screen";
import { HamburgerIcon, Heading, Spinner, useColorModeValue } from "native-base";

export const OpenDrawer = (navigation: any) => navigation.openDrawer();
export const DrawerAction = (navigation: any) => <HamburgerIcon onClick={() => OpenDrawer(navigation)}>Test </HamburgerIcon>;
export const PageTitle = (name: string) => <Heading size="h4">{name}</Heading>;

export const Loading = (props: any) => (
  <View>
    <Spinner size="small" />
  </View>
);

export const wp = (dimension: number) => {
  return wp2dp((dimension / 360) * 100 + "%");
};

export const hp = (dimension: number) => {
  return hp2dp((dimension / 760) * 100 + "%");
};

export const AppStyles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  box: {
    height: "auto",
    minHeight: 100,
    width: 300,
    maxWidth: 600,
    margin: 8,
    flexGrow: 1,
    elevation: 1,
  },
  boxCard: {
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 300,
    margin: 8,
    elevation: 1,
    borderRadius: 5,
    padding: 10,
  },
  boxItem: {
    height: "auto",
    minWidth: 100,
    maxWidth: 300,
    margin: 4,
    flexGrow: 1,
  },
  divider: {
    margin: 8,
  },
});

export const AppTheme = {
  BOX_DARK_BG: "coolGray.800",
  BOX_LIGHT_BG: "warmGray.50",
};
