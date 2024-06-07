import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutProject from "../screens/AboutProject";
import Navbar from "../components/Navbar";
import AboutRobot from "../screens/AboutRobot";
import Images from "../screens/Images";
import RegisterNewsletter from "../screens/RegisterNewsletter";

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
        <Screen name="AboutRobot" component={AboutRobot} />
        <Screen name="Images" component={Images} />
        <Screen name="RegNewsletter" component={RegisterNewsletter} />
      </Navigator>
      <Navbar />
    </>
  );
};

export default MainLayout;
