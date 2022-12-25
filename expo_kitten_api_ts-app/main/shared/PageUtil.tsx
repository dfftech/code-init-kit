import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

import { Icon, Spinner, Text, TopNavigationAction } from "@ui-kitten/components";

export const BackIcon = (props: any) => <Icon {...props} name="menu-outline" />;
export const OpenDrawer = (navigation: any) => navigation.openDrawer();
export const DrawerAction = (navigation: any) => (
  <TopNavigationAction icon={BackIcon} onPress={() => OpenDrawer(navigation)} />
);
export const PageTitle = (name: string) => (
  <Text category="h3" status="primary">
    {name}
  </Text>
);

export const Loading = (props: any) => (
  <View>
    <Spinner size="small" />
  </View>
);

export const wp = (dimension: number) => {
  return wp2dp((dimension / 360) * 100 + '%');
};

export const hp = (dimension: number) => {
  return hp2dp((dimension / 760) * 100 + '%');
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
