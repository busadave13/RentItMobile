import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Search from "../screens/search";
import Saved from "../screens/saved";
import Filter from "../screens/filter";
import { Ionicons } from '@expo/vector-icons';

// Tab
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, focused, size}) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Search") {
                        iconName = focused ? "search" : "search-outline";
                    } else if (route.name === "Saved") {
                        iconName = focused ? "heart" : "heart-outline";
                    } else if (route.name === "Filter") {
                        iconName = focused ? "filter" : "filter-outline";
                    }                    

                    return <Ionicons name={iconName} size={size} color={color} />
                },
            tabBarActiveTintColor: "#1DA1F2",
            tabBarInactiveTintColor: "gray"
            })}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Filter" component={Filter} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    );
}