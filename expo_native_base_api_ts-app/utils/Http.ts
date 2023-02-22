import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { messageEmit, loaderEmit, sessionUserEmit } from "./AppEvent";
import AppStorage from "./AppStorage";
import { ApiUrl } from "./Props";

console.log(":::: ApiUrl :::: ", ApiUrl());
const APP_API_URL = ApiUrl() + "/api";

export const post = (url: string, reqData: any, showLoader = true) => {
  reqData = { data: reqData };
  if (!!showLoader) {
    loaderEmit(true);
  }

  url = APP_API_URL + url;
  let token = jwtToken();
  return ajax({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: reqData,
  }).pipe(
    map((response:any) => {
      loaderEmit(false);
      let res = response.response;
      if (res && res.error) {
        let error = res.error;

        if (error && error.message) {
          error.type = "error";
          messageEmit(error);
        }
        return null;
      } else {
        return res.data;
      }
    }),
    catchError((error) => {
      loaderEmit(false);
      console.log("error: ", error);
      if (error && error.message) {
        error.type = "error";
        messageEmit(error);
      }
      return of(error);
    })
  );
};

export const get = (url: string, showLoader = true) => {
  if (!!showLoader) {
    loaderEmit(true);
  }
  url = APP_API_URL + url;
  let token = jwtToken();
  return ajax({
    url: url,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  }).pipe(
    map((response: any) => {
      loaderEmit(false);
      let res = response.response;
      if (res && res.error) {
        let error = res.error;
        if (error && error.message) {
          error.type = "error";
          messageEmit(error);
        }
        return null;
      } else {
        return res.data;
      }
    }),
    catchError((error: any) => {
      loaderEmit(false);
      console.log("error: ", error.message);
      if (error && error.message) {
        error.type = "error";
        messageEmit(error);
      }
      return of(null);
    })
  );
};

export const unSecurePost = (url: string, reqData: any, showLoader = true) => {
  reqData = { data: reqData };
  if (!!showLoader) {
    loaderEmit(true);
  }
  url = APP_API_URL + url;
  return ajax({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: reqData,
  }).pipe(
    map((response: any) => {
      loaderEmit(false);
      let res = response.response;
      if (res && res.error) {
        let error = res.error;
        console.log("Http error unSecurePost :", error);
        if (error && error.message) {
          error.type = "error";
          messageEmit(error);
        }
        return null;
      } else {
        if (url.includes("/auth/signin")) {
          const data = res.data ? res.data : res;
          console.log(data);
          StoreData(data);
          return data;
        }
        return res.data;
      }
    }),
    catchError((error) => {
      loaderEmit(false);
      console.log("error: ", error.message);
      if (error && error.message) {
        error.type = "error";
        messageEmit(error);
      }
      return of(null);
    })
  );
};

export const unSecureGet = async (url: any, showLoader = true) => {
  if (!!showLoader) {
    loaderEmit(true);
  }
  url = APP_API_URL + url;
  return ajax({
    url: url,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).pipe(
    map((response: any) => {
      loaderEmit(false);
      let res = response.response;
      if (res && res.error) {
        let error = res.error;
        if (error && error.message) {
          error.type = "error";
          messageEmit(error);
        }
        return null;
      } else {
        return res.data;
      }
    }),
    catchError((error) => {
      loaderEmit(false);
      console.log("error: ", error.message);
      if (error && error.message) {
        error.type = "error";
        messageEmit(error);
      }
      return of(null);
    })
  );
};
const jwtToken = () => {
  return AppStorage.getData("jwt");
};
const StoreData = async (data: any) => {
  await AppStorage.setData("user", data.identity);
  await AppStorage.setData("jwt", data.access_token);
  // await SessionMenu(data.menu.data);
  sessionUserEmit(data.identity);
};

const SessionMenu = async (storeMenuList: any) => {
  console.log(storeMenuList);
  // let storeMenuList = AppStorage.getData("menu");
  if (storeMenuList) {
    let menu: any[] = [];
    storeMenuList.map((ele: any) => {
      if (ele.readAccess === true) {
        menu.push(
          Object.assign(
            {},
            {
              name: ele.link.name,
              url: "/" + ele.link.link,
              priority: ele.priority,
              children: ele.children.map((item: any) =>
                Object.assign({
                  name: item.link.name,
                  url: "/" + item.link.link,
                })
              ),
            }
          )
        );
      }
    });
    await AppStorage.setData("menu", menu);
    console.log("Store Menu: ", AppStorage.getData("menu"));
  } else {
    await AppStorage.setData("menu", []);
  }
};
