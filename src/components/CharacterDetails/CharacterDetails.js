import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { toggleModalState } from '../../helpers';

const CharacterDetails = ({ isModalOpen, activeCharacter, activeCharacter: { name, description, comics, stories }, toggleModalState }) => {

    const handleCloseModal = () => {
        toggleModalState()
    }

    if (Object.keys(activeCharacter).length === 0) {
        return null
    }

    return (
        <Modal onHide={handleCloseModal} show={isModalOpen} centered>
            <Modal.Header>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="">
                    <h3>About</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <h3>Comics</h3>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comics.items.map((comic, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{comic.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <h3>Stories</h3>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stories.items.map((comic, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{comic.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen,
    activeCharacter: state.activeCharacter
})

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleModalState: toggleModalState
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);