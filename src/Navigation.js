import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { blue, white } from './utils/colors'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

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
                tabBarIcon: ({ color }) => <Ionicons name='ios-bookmarks' size={30} color={color} />
            }}

        />
        <MyTabs.Screen
            name='AddDeck'
            component={DeckDetail}
            options={{
                tabBarLabel: 'DeckDetail',
                tabBarIcon: ({ color }) => <FontAwesome name='plus-square' size={30} color={color} />
            }}
        />



    </MyTabs.Navigator>
)

const MyStacks = createStackNavigator()

const AppStackScreen = () => (
    <MyStacks.Navigator
        screenOptions={{
            headerTintColor: white,
            headerStyle: { backgroundColor: blue },
            headerTitleAlign: 'center'
        }}
    >
        <MyStacks.Screen
            name='AppTabsScreen'
            component={AppTabsScreen}
            // Options for my screen
            options={() => ({
                headerShown: false,
            })}
        />
        <MyStacks.Screen
            name='DeckDetail'
            component={DeckDetail}
            options={() => ({
                headerTitle: `Deck Details`,

            })}
        />
        <MyStacks.Screen
            name='DeckList'
            component={DeckList}
            options={() => ({
                headerTitle: `Deck List`,
            })}
        />

    </MyStacks.Navigator>
)


function  Navigation ()  {

    return (
        <NavigationContainer>
            <AppStackScreen />
        </NavigationContainer>
    )
};

export default Navigation;
