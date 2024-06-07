import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Images = () => {
  return (
    <ScrollView className="h-full border px-4">
      <SafeAreaView className="space-y-10 h-full py-10">
        <Text className="text-2xl text-black font-semibold">Imagens</Text>
        <View className="space-y-4">
          <Image
            className="object-contain h-52 aspect-video mx-auto"
            source={require("../../assets/ocean-robot-photo-01.jpg")}
          />
          <Image
            className="object-contain h-52 aspect-video mx-auto"
            source={require("../../assets/ocean-robot-photo-02.jpg")}
          />
          <Image
            className="object-contain h-52 aspect-video mx-auto"
            source={require("../../assets/ocean-robot-photo-02.jpg")}
          />
          <Image
            className="object-contain h-52 aspect-video mx-auto"
            source={require("../../assets/ocean-robot-photo-02.jpg")}
          />
          <Image
            className="object-contain h-52 aspect-video mx-auto"
            source={require("../../assets/ocean-robot-photo-02.jpg")}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Images;
