import axios from 'axios'
import { MD5 } from 'crypto-js'

import envConfig from './../config/config'
import { fetchCharacterListPending, fetchCharacterListSuccess, fetchCharacterListError, setToggleModalState, setActiveCharacter } from '../store/actions/character';

const   ts       = Date.now(),
        str_hash = ts + envConfig.privateKey + envConfig.publickKey;


export const fetchCharacterList = (name) => {
    return dispatch => {
        dispatch(fetchCharacterListPending())

        const endpoint = envConfig.baseUrl + '/v1/public/characters'

        axios.get(endpoint, {
            params: {
                ts,
                apikey: envConfig.publickKey,
                hash: MD5(str_hash).toString(),
                ...(name ? { nameStartsWith: name } : {})
            }
        }).then(res => {
            if (res.error) {
                throw (res.error);
            }

            dispatch(fetchCharacterListSuccess(res.data.data.results))
        }).catch(error => {
            dispatch(fetchCharacterListError(error))
        })
    }
}

export const setSelectedCharacter = (character) => {
    return dispatch => {
        dispatch(setToggleModalState())
        dispatch(setActiveCharacter(character))
    }
}

export const toggleModalState = () => {
    return dispatch => {
        dispatch(setToggleModalState())
    }
}

export const normalizeImageUrl = (imageUrl, imageExtension) => {
    return imageUrl + `/portrait_uncanny.${imageExtension}`
}