import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckList from '../components/DeckList'
import DeckDetail from '../components/DeckDetail'
import DeckNew from "../components/DeckNew";
import Quiz from "../components/Quiz";
import CardNew from "../components/CardNew";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const ListStack=createStackNavigator();
const AddStack =createStackNavigator();
const MyTabs   =createBottomTabNavigator();
//const AddCard  =createStackNavigator();
//const Quiz  =createStackNavigator();

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
        <ListStack.Screen
        name='CardNew'
        component={CardNew}
        options={() => ({
            headerTitle: `New Card`,
        })}
    />
        <ListStack.Screen
            name='Quiz'
            component={Quiz}
            options={() => ({
                headerTitle: `Quiz`,
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
            options={{
                tabBarLabel: 'Deck List',
                tabBarIcon: ({ color }) => <Entypo name="list" size={20} color={color} />
            }}


        />
        <MyTabs.Screen
            name='New Deck'
            component={NewDeckStackScreen}
            options={{
                tabBarLabel: 'ADD Deck',
                tabBarIcon: ({ color }) => <AntDesign name='pluscircle' size={20} color={color} />


            }}
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
