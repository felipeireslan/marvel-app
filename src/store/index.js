import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const INITIAL_STATE = {
    isModalOpen: false,
    activeCharacter: {},
    characterName: '',
    loading: false,
    characterList: [],
    error: null
}

const middlewares = [thunk]

function characterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "FETCH_CHARACTER_LIST_PENDING":
            return {
                ...state,
                loading: true
            }

        case "FETCH_CHARACTER_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                characterList: action.characterList
            }

        case "FETCH_CHARACTER_LIST_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case "SET_CHARACTER_NAME":
            return {
                ...state,
                characterName: action.characterName
            }
        case "SET_TOGGLE_MODAL_STATE":
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }

        case "SET_ACTIVE_CHARACTER":
            return {
                ...state,
                activeCharacter: action.activeCharacter
            }

        default:
            return state
    }
}

const store = createStore(characterReducer, INITIAL_STATE, applyMiddleware(...middlewares))

export default store;