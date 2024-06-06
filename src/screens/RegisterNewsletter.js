import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import saveEmailToNewsletter from "../controller/saveEmailToNewsletter";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterNewsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView className="h-full flex items-center justify-center">
      <View className="flex gap-y-10">
        <Text className="text-2xl">Registro Newsletter</Text>
        <TextInput
          placeholder="Email"
          className="px-4 py-2 border"
          onChangeText={setEmail}
        />
        <Button title="Assinar" onPress={() => saveEmailToNewsletter(email)} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterNewsletter;
