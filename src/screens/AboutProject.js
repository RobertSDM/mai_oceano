import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutProject = () => {
  return (
    <SafeAreaView className="h-full bg-sky-900 p-10 pt-20 space-y-10">
      <View>
        <Image
          className="object-contain h-32 aspect-video mx-auto"
          source={require("../../assets/maiocean-logo-white.png")}
        />
      </View>
      <View>
        <View></View>
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutProject;
