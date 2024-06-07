import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import {
    updateSubscriberEmail,
    deleteSubscriberEmail,
    saveEmailToNewsletter,
} from "../controller/newsletterController";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

const RegisterNewsletter = () => {
    const [email, setEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const [showButton, setShowButton] = useState(false);

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
                            value={newEmail}
                            placeholder="Novo email"
                            className="px-4 py-2 border"
                            onChangeText={setNewEmail}
                        />
                    </View>
                    <View>
                        <Text>Email original</Text>
                        <TextInput
                            value={email}
                            placeholder="Email"
                            className="px-4 py-2 border"
                            onChangeText={setEmail}
                        />
                    </View>
                    <View className="flex flex-row justify-between gap-x-10">
                        <CustomButton
                            text="Atualizar"
                            onPress={async () =>
                                await updateSubscriberEmail(newEmail, email)
                            }
                        />
                        <CustomButton
                            text="Cancelar assinatura"
                            onPress={async () =>
                                await deleteSubscriberEmail(email)
                            }
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
                        value={email}
                        placeholder="Email"
                        className="px-4 py-2 border"
                        onChangeText={setEmail}
                    />
                    <CustomButton
                        text="Assinar"
                        onPress={async () => {
                            const res = await saveEmailToNewsletter(email);
                            setShowButton(!res);
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
