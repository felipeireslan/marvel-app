export function fetchCharacterListPending() {
    return {
        type: 'FETCH_CHARACTER_LIST_PENDING'
    }
}

export function fetchCharacterListSuccess(characterList) {
    return {
        type: 'FETCH_CHARACTER_LIST_SUCCESS',
        characterList
    }
}

export function fetchCharacterListError(error) {
    return {
        type: 'FETCH_CHARACTER_LIST_ERROR',
        error
    }
}

export function setCharacterName(characterName) {
    return {
        type: 'SET_CHARACTER_NAME',
        characterName
    }
}