import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PowerStateCard from '../PowerStateCard/PowerStateCard';
import 'react-circular-progressbar/dist/styles.css';
import './SuperHero.css';

const Superhero = ({ superhero }) => {
    const { powerstats, images, name, id, biography } = superhero ? superhero : ''
    const { md } = images ? images : ''
    const { fullName } = biography ? biography : ''
    let navigate = useNavigate();

    const getDetailsOfSuperhero = (e, id) => {
        e.preventDefault();
        navigate(`profile/${id}`);
    }

    return (
        <>
            <Card border="dark" bsPrefix='card-container'>
                <div className='img-container'>
                    <Card.Img variant="top" src={md} style={{ objectFit: "cover" }} />
                </div>
                <Card.Body>
                    <Card.Title style={{ paddingTop: "0.5em" }}>{name}</Card.Title>
                    {
                        fullName ? (<Card.Text>
                            <strong>{fullName}</strong>
                        </Card.Text>) : (<Card.Text>
                            <strong>-</strong>
                        </Card.Text>)
                    }

                </Card.Body>
                <PowerStateCard powerstats={powerstats} />
                <Card.Body style={{ marginTop: "0.5em" }}>
                    <div onClick={(e) => getDetailsOfSuperhero(e, id)}>
                        <Card.Link>See Profile</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Superhero


