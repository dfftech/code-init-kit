import React, { useEffect, useState } from "react";
import { Card, Layout, Text, TopNavigation } from "@ui-kitten/components";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { DrawerAction, PageTitle } from "../../shared/PageUtil";
import { SafeAreaView, Image } from "react-native";

const Dashboard = (props: any) => {
  const navigation = useNavigation();
  const [id, setId] = useState(null);

  const PageHeader = () => (
    <TopNavigation
      alignment="center"
      //accessoryLeft={() => DrawerAction(navigation)}
      title={() => PageTitle("DashBoard")}
    />
  );

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
      <Card header={PageHeader} style={{ margin: 8 }}>

      </Card>
    </SafeAreaView>
  );
};

export default Dashboard;
