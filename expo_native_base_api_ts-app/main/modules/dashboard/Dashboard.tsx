import React, { useEffect, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { DrawerAction, PageTitle } from "../../shared/PageUtil";
import { SafeAreaView, Image } from "react-native";
import { Heading } from "native-base";

const Dashboard = (props: any) => {
  const navigation = useNavigation();
  const [id, setId] = useState(null);

  const PageHeader = () => <Heading size={"lg"}> DashBoard </Heading>;

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      return () => {
        console.log("Dashboard Disconnect: ", id);
      };
    }, [])
  );
  useEffect(() => {
    // Do something
  }, []);

  return (
    <SafeAreaView>
      <PageHeader />
    </SafeAreaView>
  );
};

export default Dashboard;
