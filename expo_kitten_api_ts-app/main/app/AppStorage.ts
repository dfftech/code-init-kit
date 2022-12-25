// import StorageService from "../storage/StorageNative";
const StorageService: any= {}
const APP_ID = "APP-STORE";



const setData = async (key: string, value: any) => {
  key = APP_ID + "-" + key;
  if (value) {
    value = typeof value == "string" ? value : JSON.stringify(value);
  }
  try {
    StorageService.setItem(key, value);
  } catch (error) {
    console.log("Store Error", error);
  }
};

const getData = (key: string) => {
  key = APP_ID + "-" + key;
  try {
    let obj = StorageService.getItem(key);
    if (obj && (obj.includes("{") || obj.includes("["))) {
      return JSON.parse(obj);
    } else {
      return obj;
    }
  } catch (error) {
    console.log("Store Error", error);
    return null;
  }
};

const removeData = (key: string) => {
  key = APP_ID + "-" + key;
  try {
    StorageService.removeItem(key);
  } catch (error) {
    console.log("Store Error", error);
  }
};

const clearData = async () => {
  let rememberDetails = getData("RememberMe");
  let resetTime = getData("reset-time");
  try {
    // TODO
    await StorageService.clear();
  } catch (error) {
    console.log(error);
  }
  if (rememberDetails) {
    await setData("RememberMe", rememberDetails);
  }
  if (resetTime !== "null" && resetTime != null) {
    await setData("reset-time", resetTime);
  }
};

const AppStorage = {
  getData,
  setData,
  removeData,
  clearData,
};

export default AppStorage;
