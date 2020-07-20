import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckList from '../components/DeckList'
import DeckDetail from '../components/DeckDetail'
import DeckAdd from "../components/DeckAdd";



const ListStack=createStackNavigator();
const AddStack=createStackNavigator();
const MyTabs = createBottomTabNavigator();

const ListStackScreen = () => (
    <ListStack.Navigator

    >
        <ListStack.Screen
            name='DeckList'
            component={DeckList}
            options={() => ({
                headerTitle: `Deck List`,
            })}
        />
        <ListStack.Screen
            name='DeckDetail'
            component={DeckDetail}
            options={() => ({
                headerTitle: `Deck Detail`,
            })}
        />
    </ListStack.Navigator>
);


const AddDeckStackScreen= () => (
    <AddStack.Navigator

    >
        <AddStack.Screen
            name='AddDeck'
            component={DeckAdd}
            options={() => ({
                headerTitle: `Deck Add`,
            })}
        />
    </AddStack.Navigator>
);




const AppTabsScreen = () => (
    <MyTabs.Navigator
        initialRouteName='AppTabsScreen'

    >
        <MyTabs.Screen
            name='Deck List'
            component={ListStackScreen}


        />
        <MyTabs.Screen
            name='AddDeck'
            component={AddDeckStackScreen}

        />



    </MyTabs.Navigator>
)


function  Navigation ()  {

    return (
        <NavigationContainer>
            <AppTabsScreen />
        </NavigationContainer>
    )
};

export default Navigation;
