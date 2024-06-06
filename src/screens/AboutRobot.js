import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutRobot = () => {
  return (
    <SafeAreaView className="h-full p-4 pt-20 space-y-10">
      <View>
        <View>
          <Text className="text-xl font-semibold">Robo Peixe</Text>
          <Text>para exploração</Text>
        </View>
        <Image
          className="object-contain h-52 aspect-video mx-auto"
          source={require("../../assets/robot_black.png")}
        />
      </View>
      <Text>jfmiapfdoainaisljasdipansdpiahsp</Text>
      <Text>jfmiapfdoainaisljasdipansdpiahsp</Text>
    </SafeAreaView>
  );
};

export default AboutRobot;
