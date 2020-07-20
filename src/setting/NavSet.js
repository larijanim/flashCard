import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckList from '../components/DeckList'
import DeckDetail from '../components/DeckDetail'
import DeckNew from "../components/DeckNew";



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
                headerTitle: `Flash Card `,
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


const NewDeckStackScreen= () => (
    <AddStack.Navigator

    >
        <AddStack.Screen
            name='NewDeck'
            component={DeckNew}
            options={() => ({
                headerTitle: `New Deck`,
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
            name='NewDeck'
            component={NewDeckStackScreen}

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
