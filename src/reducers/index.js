import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from '../actions/index'

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }

        case ADD_DECK:
            const { deck } = action
            return {
                ...state,
                decks:{
                    ...state.decks,
                    [deck.title]: deck
                }

            }

        case DELETE_DECK:
            // brilliant
            const { titleId } = action;
            const { [titleId]: value, ...restDeck } = state;
            return restDeck ;



        case ADD_CARD:
            const {title, card } = action
            return {
                ...state,
                [title]: {
                    ...state[title],
                    questions: [
                        ...state[title].questions,
                        card
                    ]
                }
            }
    }
}

export default decks
