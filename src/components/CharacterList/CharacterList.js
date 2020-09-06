import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchCharacterList, normalizeImageUrl } from './../../helpers'
import InfoCard from '../InfoCard/InfoCard';
import Spinner from '../Spinner/Spinner';

import './CharacterList-style.scss'

const CharacterList = ({ loading, characterList, fetchCharacterList }) => {

    useEffect(() => {
        fetchCharacterList()
    }, [fetchCharacterList])

    if (loading) {
        return <Spinner />
    }

    if (characterList.length === 0) {
        return <div class="alert alert-primary" role="alert">
            No character found! Type other name and try again.
      </div>
    }

    return (
        <div className="list-container">
            {
                characterList.map((character, index) => (
                    <div key={index}>
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
    fetchCharacterList: fetchCharacterList
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterList);
