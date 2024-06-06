import { ToastAndroid } from "react-native";

const showScreenMessage = (msg) => {
  ToastAndroid.showWithGravity(msg, 
    ToastAndroid.SHORT, ToastAndroid.CENTER);
};

export default showScreenMessage;
