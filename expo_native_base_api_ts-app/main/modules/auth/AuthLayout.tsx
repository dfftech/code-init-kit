import React from "react";
import { Dimensions, View, Image, StyleSheet, SafeAreaView } from "react-native";

const BgImage = require("../../../assets/images/LoginBg.jpg");

const AuthLayout = ({ name, children }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={BgImage} style={styles.image} />
      </View>
      <View style={styles.card}>{children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    top: 0,
    bottom: 0,
    position: "absolute",
    left: 0,
    right: 0,
  },
  image: { flex: 1, height: "100%", width: "100%" },
  card: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: Dimensions.get("window").width > 450 ? "flex-end" : "center",
    marginHorizontal: 16,
  },
});

export default AuthLayout;