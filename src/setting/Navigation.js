import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { blue, white } from '../utils/colors'
import DeckList from '../components/DeckList'
import DeckDetail from '../components/DeckDetail'
import { Ionicons } from '@expo/vector-icons'

const { Navigator, Screen } = createStackNavigator();
const MyTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
    <MyTabs.Navigator
        initialRouteName='AppTabsScreen'

    >
        <MyTabs.Screen
            name='DeckList'
            component={DeckList}
            options={{
                tabBarLabel: 'Deck List',
                tabBarIcon: ({ color }) => <Ionicons name='ios-bookmarks' size={20} color={color} />
            }}

        />
        <MyTabs.Screen
            name='DeckDetail'
            component={DeckDetail}
            options={{
                tabBarLabel: 'DeckDetail',
                tabBarIcon: ({ color }) => <Ionicons name='add-circle' size={20} color={color} />
            }}
        />



    </MyTabs.Navigator>
)

//const MyStacks = createStackNavigator()


const AppStackScreen = () => (
    <Navigator
        screenOptions={{
            headerTintColor: white,
            headerStyle: { backgroundColor: blue },
            headerTitleAlign: 'center'
        }}
    >

        <Screen
            name='AppTabsScreen'
            component={AppTabsScreen}
            options={() => ({
                headerShown: false,
            })}
        />

        <Screen
            name='Home'
            component={DeckList}
            options={() => ({
                headerTitle: `Deck List`,
            })}
        />
        <Screen
            name='DeckDetail'
            component={DeckDetail}
            options={() => ({
                headerTitle: `Deck Details`,

            })}
        />




    </Navigator>
)


function  Navigation ()  {

    return (
        <NavigationContainer>
            <AppStackScreen />
        </NavigationContainer>
    )
};

export default Navigation;
