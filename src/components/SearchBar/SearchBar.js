import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { setCharacterName } from './../../store/actions/character';
import { fetchCharacterList } from './../../helpers';

import './SearchBar-style.scss';

const SearchBar = ({ characterName, fetchCharacterList, setCharacterName }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        fetchCharacterList(characterName)
    }

    const handleInputChange = (e) => {
        setCharacterName(e.target.value)
    }

    return (
        <div>
            <Form className="form" onSubmit={onSubmit}>
                <InputGroup className="input-group-container">
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Type here to search..."
                        value={characterName}
                        onChange={handleInputChange}
                    />
                </InputGroup>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    characterName: state.characterName
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCharacterList: fetchCharacterList,
    setCharacterName: setCharacterName
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)