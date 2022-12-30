import React, { useEffect, useState } from "react";
import { loaderEvent } from "../app/AppEvent";
import { StyleSheet, ActivityIndicator, View } from "react-native";

const ProgressBar = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loaderEvent.subscribe((data) => {
      if (data != null) {
        setLoading(data);
      }
    });
  });
  return (
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProgressBar;
