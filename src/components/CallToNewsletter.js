import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

const CallToNewsletter = () => {
  const navigator = useNavigation();

  return (
    <View className="space-y-5">
      <Text className="text-black text-base text-center">
        Este é um projeto independente que visa a melhora da relação entre ser
        humano e oceano. {`\n`}
        Se você gostou da idea por favor compartilhe ou assine a newsletter para
        se manter atualizado sobre o desenvolvimento e ajude a causa
      </Text>
      <View
        className="bg-sky-700 px-4 py-2 flex items-center justify-center"
        onTouchStart={() => {
          navigator.navigate("RegNewsletter");
        }}
      >
        <Text className="text-emerald-200 text-lg">Newsletter</Text>
      </View>
    </View>
  );
};

export default CallToNewsletter;
