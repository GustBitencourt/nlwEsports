import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GameAds } from "../screens/GameAds";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes () {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}        
        >
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="gameAds"
                component={GameAds}                
            />
        </Navigator>
    )
}