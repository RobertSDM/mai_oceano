import { Text, View } from "react-native";

const CustomButton = ({ style, textClassname, text, onPress, className }) => {
  return (
    <View
      style={style}
      onTouchStart={onPress}
      className={`${className} bg-sky-700 px-4 py-2 flex items-center justify-center`}
    >
      <Text className={`${textClassname} text-emerald-200 text-lg`}>
        {text}
      </Text>
    </View>
  );
};

export default CustomButton;
