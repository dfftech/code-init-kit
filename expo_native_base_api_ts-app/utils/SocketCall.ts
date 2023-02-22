//window.navigator.userAgent = "ReactNative";
import socketIOClient from 'socket.io-client';
import { ApiUrl } from './Props';
const APP_IO_URL = ApiUrl()+ "/io";

const SocketCall = (url: string) => {
   return socketIOClient(APP_IO_URL+url, { forceNew: true })
}

export default SocketCall;