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

export function setActiveCharacter(character) {
    return {
        type: 'SET_ACTIVE_CHARACTER',
        activeCharacter: character
    }
}

export function setToggleModalState() {
    return {
        type: 'SET_TOGGLE_MODAL_STATE'
    }
}