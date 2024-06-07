import { Image, Text, View } from "react-native";
import { SafeAreaView, ScrollView } from "react-native-safe-area-context";

const AboutRobot = () => {
  return (
    <ScrollView className="h-full p-4 pt-20">
      <SafeAreaView className="h-full p-4 space-y-10">
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
        <Text className="text-base">
          A MAI Ocean apresenta o coração do projeto, um robo explorador com o
          formato de peixe, para facilitar a camuflagem durante as suas
          pesquisas no oceano
        </Text>
        <Text className="text-base">
          O robo explorador será feito com material reciclavel, como: plastico,
          metais, etc... O robo funciona com um sistema de sonar e localização,
          uma camera de alta qualidade para tirar fotografias de especies de
          animais, corais e solo, e sensores para capturar a temperatura do
          oceano. Os dados coletados pelo robo tem como proposito analisar o
          oceano e verificar se a condição do oceano está boa.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AboutRobot;
