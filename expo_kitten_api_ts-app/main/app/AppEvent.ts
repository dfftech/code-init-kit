import { BehaviorSubject } from "rxjs";
import AppStorage from "./AppStorage";

const messageEvent = new BehaviorSubject(null);
const sessionUserEvent = new BehaviorSubject(null);
const loaderEvent = new BehaviorSubject(null);
const languageEvent = new BehaviorSubject(null);

const messageEmit = (data: any) =>{
  messageEvent.next(data);
};

const loaderEmit = (data: any) =>{
  loaderEvent.next(data);
};

const languageEmit = (data: any) =>{
  languageEvent.next(data);
};

const sessionUserEmit = (data: any) =>{
  if (data) {
    sessionUserEvent.next(data);
  } else {
    //AppStorage.clearData();
    sessionUserEvent.next(null);
  }
};

export {
  messageEvent,
  messageEmit,
  sessionUserEvent,
  sessionUserEmit,
  loaderEvent,
  loaderEmit,
  languageEvent,
  languageEmit,
};
