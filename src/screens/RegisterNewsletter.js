import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import saveEmailToNewsletter from "../controller/saveEmailToNewsletter";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterNewsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView>
      <Text>Registro Newsletter</Text>
      <TextInput placeholder="Email" onChangeText={setEmail}/>
      <Button title="Assinar" onPress={() => saveEmailToNewsletter(email)} />
    </SafeAreaView>
  );
};

export default RegisterNewsletter;
