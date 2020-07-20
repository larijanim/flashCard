import AsyncStorage from '@react-native-community/async-storage'
import { decks } from './data'

export const FLASHCARDS_KEY = 'FlashCards'

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

export async function saveDeckTitle(title) {
    try {
        await AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify({
            [title]: {
                title: title,
                questions: []
            }
        }))
    } catch (err) {
        console.log(`Error saving title ${title} `, err)
    }
}

export async function addCardToDeck(card, title) {
    try {
        const deck = await getDeck(title)

        await AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify({
            [title]: {
                questions: [
                    ...deck.questions,
                    card
                ]

            }
        }))
    } catch (err) {
        console.log(`Error add card ${card} `, err)
    }
}

export async function removeDeck(title) {
    try {
        const decks = await AsyncStorage.getItem(FLASHCARDS_KEY)

        const data = JSON.parse(decks)

        data[title] = undefined
        delete data[title]

        AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(data))
    } catch (err) {
        console.log(`Error removig deck ${title} `, err)
    }
}
