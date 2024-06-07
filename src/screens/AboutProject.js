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
          <Text className="text-base">
              O Desafio Inovação Azul 2024 surge em resposta aos desafios
            prementes enfrentados pelos oceanos, desde a destruição de habitats
            marinhos até as consequências da poluição e das mudanças climáticas.
            Reconhecendo a necessidade de uma abordagem holística, a MAI Ocean
            propõe uma solução inovadora: um "peixe-robô" feito de materiais
            recicláveis retirados dos oceanos.
          </Text>
          <Text className="text-base">
              Este dispositivo, equipado com câmeras e termômetros, oferece
            monitoramento em tempo real das condições oceânicas, permitindo a
            avaliação da vida marinha e a detecção precoce de eventos
            prejudiciais.
          </Text>
          <Text className="text-base">
              Além disso, sua capacidade de comunicação eficiente com uma central
            permite respostas rápidas em caso de avarias, promovendo uma gestão
            mais eficaz e sustentável dos oceanos.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutProject;
