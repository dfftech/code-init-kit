import React, { Fragment, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Card, Layout, TopNavigation, Text } from "@ui-kitten/components";
import { DrawerAction, PageTitle } from "../../shared/PageUtil";

const Home = (props: any) => {
  const navigation = useNavigation();
  const [id, setId] = useState(null);

  const PageHeader = () => (
    <TopNavigation
        alignment="center"
       // accessoryLeft={() => DrawerAction(navigation)} title={() => PageTitle("Home")}
    />
  );

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

      <Card header={PageHeader} style={{ margin: 8 }}>
        <Text> {"Text"} </Text>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
