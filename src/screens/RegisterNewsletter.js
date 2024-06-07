import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import saveEmailToNewsletter from "../controller/saveEmailToNewsletter";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import updateSubscriberEmail from "../controller/updateSubscriberEmail";
import deleteSubscriberEmail from "../controller/deleteSubscriberEmail";

const RegisterNewsletter = () => {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
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
              placeholder="Novo email"
              className="px-4 py-2 border"
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text>Email original</Text>
            <TextInput
              placeholder="Email"
              className="px-4 py-2 border"
              onChangeText={setNewEmail}
            />
          </View>
          <View className="flex flex-row justify-between gap-x-10">
            <CustomButton
              text="Atualizar"
              onPress={() => updateSubscriberEmail(newEmail, email)}
            />
            <CustomButton
              text="Deletar"
              onPress={() => deleteSubscriberEmail(email)}
            />
          </View>
          <CustomButton
            text="Voltar"
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
              setShowButton(res);
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
