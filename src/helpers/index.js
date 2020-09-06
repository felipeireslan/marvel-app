import axios from 'axios'
import { MD5 } from 'crypto-js'

import { fetchCharacterListPending, fetchCharacterListSuccess, fetchCharacterListError } from '../store/actions/character';

const   baseUrl     = 'http://gateway.marvel.com',
        privateKey  = 'a2510caf764e313034a892e18a71c46a286d8169',
        publickKey  = '9ff737af632e6cb8d3d6015d70c0fa8c',
        ts          = Date.now(),
        str_hash    = ts + privateKey + publickKey;


export const fetchCharacterList = (name) => {
    return dispatch => {
        dispatch(fetchCharacterListPending())

        const endpoint = baseUrl + '/v1/public/characters'

        axios.get(endpoint, {
            params: {
                ts,
                apikey: publickKey,
                hash: MD5(str_hash).toString(),
                ...(name ? { name: name } : {})
            }
        }).then(res => {
            if (res.error) {
                throw(res.error);
            }

            dispatch(fetchCharacterListSuccess(res.data.data.results))
        }).catch(error => {
            dispatch(fetchCharacterListError(error))
        })
    }
}

export const normalizeImageUrl = (imageUrl, imageExtension) => {
    return imageUrl + `/portrait_uncanny.${imageExtension}`
}