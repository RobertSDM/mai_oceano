import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CallToNewsletter from "../components/CallToNewsletter";

const AboutProject = () => {
  return (
    <SafeAreaView className="h-full p-4 pt-20 space-y-10">
      <View>
        <Image
          className="object-contain h-32 aspect-video mx-auto"
          source={require("../../assets/maiocean-logo.png")}
        />
      </View>
      <View>
        <CallToNewsletter />
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
