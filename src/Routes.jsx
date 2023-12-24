import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Pages/Home/Home";
import NavigationScreen from "./Pages/Home/screens/NavigationScreen";
import ApiScreen from "./Pages/Home/screens/ApiScreen";
import Settings from "./Pages/Settings/Settings";
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
    <Stack.Navigator initialRouteName="ReactNativeJourney" screenOptions={{headerShown: false}}>
        <Stack.Screen name="ReactNativeJourney" component={HomeScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
        <Stack.Screen name="API" component={ApiScreen} />
    </Stack.Navigator>
    );  
};


export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Home"){
                        iconName = "home";
                    } else if (route.name === "Settings"){
                        iconName = "ios-settings";
                    };
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: "#00989f",
                tabBarShowLabel: false,
            })}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};