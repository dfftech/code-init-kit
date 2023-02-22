// useColorScheme from react-native does not support web currently. You can replace
// this with react-native-appearance if you would like theme support on web.
import {useColorScheme} from "react-native";

export default function UseColorScheme() {
  return useColorScheme();
  //return "light";
}
