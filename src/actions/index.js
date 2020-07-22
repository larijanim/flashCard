import { getDecks ,
    addCardAPI ,
    saveDeckAPI,
     removeDeckAPI} from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
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

export function removeDeck(title) {
    return {
        type: REMOVE_DECK,
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

export  function handleNewDeck(deck) {
  // let x=  await addDeck(deck);
 //  let y = await saveDeckAPI(deck.title);
 //  return  y;
     return (dispatch)=> {
          dispatch(addDeck(deck))
         return saveDeckAPI(deck.title);

}

    async function getSomeAsyncData(value){
        const result = await fetchTheData(someUrl, value);
        return result;
    }
}


export function handleDelDeck(title ) {
    return (dispatch)=> {
        dispatch( removeDeck(title ))
            return removeDeckAPI(title);
    };

}

