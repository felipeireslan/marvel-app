import React from 'react';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import 'bootstrap/dist/css/bootstrap.min.css';
import './InfoCard-style.scss';

const InfoCard = ({ name, imageUrl }) => {
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">{`Click to see more about: ${name}`}</Tooltip>}>
            <Card className="card-container">
                <Card.Img className="card-image" variant="top" src={imageUrl} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{name}</Card.Title>
                </Card.Body>
            </Card>
        </OverlayTrigger>
    )
}

export default InfoCard;