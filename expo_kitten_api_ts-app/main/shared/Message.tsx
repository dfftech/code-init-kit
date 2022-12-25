import React, { useEffect, useState } from "react";
import { messageEvent } from "../app/AppEvent";

import { ApplicationProvider } from "@ui-kitten/components";
import { View } from "react-native";

const Message = () => {
  const [visible, setVisible] = React.useState(false);
  const [displayMessage, setDisplayMessage] = React.useState(null);
  const onDismissSnackBar = () => {
    setVisible(false);
    setDisplayMessage(null);
  };

  useEffect(() => {
    messageEvent.subscribe((data: any) => {
      if (data) {
        console.log("Message: ", data.type, data.message);
        setDisplayMessage(data.message);
        setVisible(true);
      }
    });
  }, []);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  }, [visible]);
  return (
    <View>
      {/*<SnackBar visible={visible} text={displayMessage} />*/}
      {displayMessage}
    </View>
    // <Snackbar
    //   duration={5000}
    //   visible={visible}
    //   style={{ flex: 1, maxWidth: 800, minWidth: 350, right: 1, position: "absolute", bottom: 50 }}
    //   onDismiss={onDismissSnackBar}
    //   action={{
    //     label: "Undo",
    //     onPress: () => {
    //       // Do something
    //     },
    //   }}
    // >
    //   {displayMessage}
    // </Snackbar>
  );
};

export default Message;
