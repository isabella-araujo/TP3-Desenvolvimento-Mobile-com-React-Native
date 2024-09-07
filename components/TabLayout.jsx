import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import Perfil from '../screens/Perfil'
import TabBarIcon from '../components/TabBarIcon'
import { useTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
    const theme = useTheme();
    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarStyle: {
                    backgroundColor: theme.colors.background,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'analytics' : 'analytics-outline'} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
