import {AsyncStorage} from 'react-native'
import { decks } from './data'
import {generateId} from "./helpers";

export const FLASHCARDS_KEY = '@FlashCardsStorage1253'

export async function getDecks() {
    try {
        const results = await AsyncStorage.getItem(FLASHCARDS_KEY)

        if (results === null) {

            AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(decks))
        }

        return results === null ? decks : JSON.parse(results)

    } catch (err) {
        console.log('Error Retrieving Data ', err)
    }
}


export async function getDeck(id) {
    try {
        const results = await AsyncStorage.getItem(FLASHCARDS_KEY)

        if (results !== null) {
            return JSON.parse(results)[id]
        }

    } catch (err) {
        console.log(`Error getting ${id} deck `, err)
    }
}

export async function saveDeckAPI(title ) {
    try{  getDecks()
        .then((decks) => {
            return {
                ...decks,
                       [title]: {
                       title: title,
                       //id: generateId(),
                      questions: [],}
                }
        })
        .then((newDecks) => {
             AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(newDecks))
        })
    } catch (err) {
        console.log(`Error add deck ${title} `, err)
    }
}

export async function addCardAPI(title, card) {
    try {
        getDecks()
            .then((decks) =>{
                return{
                    ...decks,
                    [title]:{
                        questions: decks[title].questions.concat([card])
                    }
                }
            })
            .then((newDecks) =>{
                AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(newDecks))
            })

    } catch (err) {
        console.log(`Error add card ${card} `, err)
    }
}

export async function removeDeckAPI(title) {
    try {
        const decks = await AsyncStorage.getItem(FLASHCARDS_KEY);

        const data = JSON.parse(decks);

        data[title] = undefined;
        delete data[title];

        AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(data));
    } catch (err) {
        console.log(`Error removig deck ${title} `, err);
    }
}
