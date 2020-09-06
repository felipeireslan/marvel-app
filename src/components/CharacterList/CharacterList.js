import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchCharacterList, setSelectedCharacter, normalizeImageUrl } from './../../helpers'
import InfoCard from '../InfoCard/InfoCard';
import Spinner from '../Spinner/Spinner';

import './CharacterList-style.scss'

const CharacterList = ({ loading, characterList, fetchCharacterList, setSelectedCharacter }) => {

    useEffect(() => {
        fetchCharacterList()
    }, [fetchCharacterList])

    const handleCharacterSelected = (character) => {
        setSelectedCharacter(character)
    }

    if (loading) {
        return <Spinner />
    }

    if (characterList.length === 0 && !loading) {
        return <div className="alert alert-primary" role="alert">
            No character found! Type other name and try again.
      </div>
    }

    return (
        <div className="list-container">
            {
                characterList.map((character, index) => (
                    <div key={index} onClick={() => handleCharacterSelected(character)}>
                        <InfoCard name={character.name} imageUrl={normalizeImageUrl(character.thumbnail.path, character.thumbnail.extension)} />
                    </div>
                ))
            }
        </div>

    );
}

const mapStateToProps = state => ({
    loading: state.loading,
    characterList: state.characterList
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCharacterList: fetchCharacterList,
    setSelectedCharacter: setSelectedCharacter
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterList);
