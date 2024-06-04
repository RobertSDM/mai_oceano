import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutProject from "../screens/AboutProject";
import { View } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

const MainLayout = () => {
    return (
        <>
            <Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Screen name="AboutProj" component={AboutProject} />
            </Navigator>
        </>
    );
};

export default MainLayout;
