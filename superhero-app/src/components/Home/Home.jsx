import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { getAllSuperHero } from '../../api/SuperHeroApi';
import SuperHero from "../SuperHero/SuperHero";
import NavBar from '../NavBar/NavBar';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [superheros, Setsuperheros] = useState([]);

    useEffect(() => {
        getAllSuperHero().then((data) => {
            Setsuperheros(data);
        })
    }, [])

    return (
        <>
            <NavBar />
            <p className="hall-of-fame">Hall of Fame</p>
            <Container bsPrefix="super-container">
                {
                    superheros && superheros.length !== 0 ? (superheros?.map((superhero, index) => {
                        return (<SuperHero superhero={superhero} />)
                    })
                    ) : (
                        <Spinner animation="border" size="6x" style={{ "margin": "0 auto" }} />
                    )
                }
            </Container>
        </>
    )
}

export default Home