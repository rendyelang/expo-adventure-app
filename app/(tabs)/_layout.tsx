import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function tabsLayout() {
    return(
        <Tabs
            screenOptions={{ 
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#898e96',
                tabBarStyle: {
                    backgroundColor: '#131E2E',
                    height: 70,
                },
                tabBarItemStyle: {
                    alignItems: 'center',       // horizontal
                    justifyContent: 'center',   // vertical
                    paddingVertical: 0,        // hilangkan padding bawaan
                    marginVertical: 0,
                    paddingHorizontal: 0,
                    marginHorizontal: 0
                },
                tabBarIconStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}>
                <Tabs.Screen 
                    name="home"
                    options={{ 
                        tabBarIcon: ({color, size}) => {
                            return (
                                <Ionicons name="home-outline" color={color} size={28} />
                            );
                        }
                    }}
                />
                <Tabs.Screen 
                    name="tickets"
                    options={{ 
                        tabBarIcon: ({color, size}) => {
                            return (
                                <Ionicons name="ticket-outline" color={color} size={28} />
                            );
                        }
                    }}
                />
                <Tabs.Screen 
                    name="profile"
                    options={{ 
                        tabBarIcon: ({color, size}) => {
                            return(
                                <Ionicons name="person-outline" color={color} size={28} />
                            ) ;
                        }
                    }}
                />
        </Tabs>
    )
}