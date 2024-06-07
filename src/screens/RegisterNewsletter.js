import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import saveEmailToNewsletter from "../controller/saveEmailToNewsletter";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

const RegisterNewsletter = () => {
  const [email, setEmail] = useState("");
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showButton, setShowButton] = useState(true);

  return (
    <SafeAreaView className="h-full flex items-center justify-center">
      {showMoreOptions ? (
        <View className="flex gap-y-10">
          <Text className="text-2xl text-center">
            Faça uma alteração no email cadastrado
          </Text>
          <View>
            <Text>Novo email</Text>
            <TextInput
              placeholder="Email"
              className="px-4 py-2 border"
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text>Email original</Text>
            <TextInput
              placeholder="Email"
              className="px-4 py-2 border"
              onChangeText={setEmail}
            />
          </View>
          <View className="flex flex-row justify-between gap-x-10">
            <CustomButton text="Atualizar" />
            <CustomButton text="Deletar" />
          </View>
          <CustomButton
            text="Cancelar"
            onPress={() => setShowMoreOptions((prev) => !prev)}
          />
        </View>
      ) : (
        <View className="flex gap-y-10">
          <Text className="text-2xl">Registro Newsletter</Text>
          <TextInput
            placeholder="Email"
            className="px-4 py-2 border"
            onChangeText={setEmail}
          />
          <CustomButton
            text="Assinar"
            onPress={() => {
              const res = saveEmailToNewsletter(email);
              console.log(res);
              setShowButton(res)
              console.log(showButton);

            }}
          />
          {showButton && (
            <CustomButton
              text="More options"
              onPress={() => setShowMoreOptions((prev) => !prev)}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default RegisterNewsletter;
