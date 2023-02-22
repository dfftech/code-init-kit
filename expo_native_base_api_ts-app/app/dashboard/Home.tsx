import React, { Fragment, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { DrawerAction, PageTitle } from "../../shared/PageUtil";
import { Heading } from "native-base";

const Home = (props: any) => {
  const navigation = useNavigation();
  const [id, setId] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      return () => {
        console.log("Home Disconnect: ", id);
      };
    }, [])
  );

  return (
    <SafeAreaView>
      <Heading> Home </Heading>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
