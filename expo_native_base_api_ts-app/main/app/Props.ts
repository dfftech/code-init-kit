import { Platform } from "react-native";

export const Props = {
  ENV_TYPE: "PRD",
  API_URL_DEV: "https://api-dev.",
  API_URL_QA: "https://api-qa.",
  API_URL_PRD: "https://api.",
};

export const ApiUrl = () => {
  if (Platform.OS == "web") {
    let url = window?.location?.href;
    url = url ? url : "";
    console.log("window.location.href :", url);
    if (url.includes("localhost")) {
      Props.ENV_TYPE = Props.ENV_TYPE;
    } else if (url.includes("dev.")) {
      Props.ENV_TYPE = "DEV";
    } else if (url.includes("qa.")) {
      Props.ENV_TYPE = "QA";
    } else {
      Props.ENV_TYPE = "PRD";
    }
  }
  console.log("=========> Props.ENV_TYPE :", Props.ENV_TYPE);
  let returnValue = " --- ";
  switch (Props.ENV_TYPE) {
    case "DEV":
      returnValue = Props.API_URL_DEV;
      break;
    case "QA":
      returnValue = Props.API_URL_QA;
      break;
    case "PRD":
      returnValue = Props.API_URL_PRD;
      break;
    default:
      returnValue = Props.API_URL_DEV;
      break;
  }
  console.log(returnValue);
  return returnValue;
};
