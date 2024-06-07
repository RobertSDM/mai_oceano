import { ToastAndroid } from "react-native";

const showScreenMessage = (msg) => {
  ToastAndroid.showWithGravity(msg, 
    ToastAndroid.SHORT, ToastAndroid.BOTTOM);
};

export default showScreenMessage;
