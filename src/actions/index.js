import { getDecks ,
    addCardAPI ,
    saveDeckAPI,
     removeDeckAPI} from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function deleteDeck(title) {
    return {
        type: DELETE_DECK,
        title
    }
}

// card must be an object with question and answer
export function addCard(title, card) {
    return {
        type: ADD_CARD,
        title,
        card
    }
}


// try make an action to deleteCard

export function handleInitialData() {
    return dispatch => {
        return getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
    }
}


export function handleNewCard(title, card) {
    return (dispatch)=> {
            dispatch(addCard(title , card ))
            return addCardAPI(title , card );
    };

}

export function handleNewDeck(deck) {
    return (dispatch)=> {
            dispatch(addDeck(deck))
            return saveDeckAPI(deck.title)
    };

}


export function handleDelDeck(title ) {
    return function(dispatch) {
        return removeDeckAPI(title )
            .then(()=> { dispatch(deleteDeck(title))});
    };

}

