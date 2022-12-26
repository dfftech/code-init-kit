// import StorageService from "../storage/StorageNative";

import AsyncStorage from "@react-native-community/async-storage";
const APP_ID = "APP_STORE";
class StorageService {
  static db: any = {};
  static init() {
    AsyncStorage.getAllKeys().then( (keys: any[]) => {
      keys.map((key: string) =>
          AsyncStorage.getItem(key)
              .then((data) => {
                StorageService.db[key] = data;
                console.log("StorageService.db", StorageService.db);
              })
        );
    });
  }

  static setItem(key: string, value: any) {
    AsyncStorage.setItem(key, value).then(() => {}).catch((e) => {console.error(e)});
     this.db[key] = value;
    }

  static getItem(key: string) {
      return this.db[key];
    }

  static getAll() {
      return this.db;
  }

  static removeItem(key: string) {
    AsyncStorage.removeItem(key).then(() => {}).catch((e) => {console.error(e)});
      delete this.db[key];
    }

  static clearAll() {
    AsyncStorage.clear().then(() => {}).catch((e) => {console.error(e)});
      this.db = {};
    }
}
StorageService.init();

const setData =  (key: string, value: any) => {
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

const clearData = () => {
  let rememberDetails = getData("RememberMe");
  let resetTime = getData("reset-time");
  try {
     StorageService.clearAll();
  } catch (error) {
    console.log(error);
  }
  if (rememberDetails) {
     setData("RememberMe", rememberDetails);
  }
  if (resetTime !== "null" && resetTime != null) {
     setData("reset-time", resetTime);
  }
};

const AppStorage = {
  getData,
  setData,
  removeData,
  clearData,
};

export default AppStorage;
