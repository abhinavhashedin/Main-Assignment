import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import NotFound from '../NotFound/NotFound';
import { getSuperHeroById } from '../../api/SuperHeroApi';
import SuperHeroStats from '../SuperHeroStats/SuperHeroStats';
import './SuperheroDetails.css';

const SuperheroDetails = () => {
  const params = useParams();
  const superheroId = params.id;
  const [superheroDetails, SetSuperheroDetails] = useState({});
  const [superheroAvailable, SetSuperheroAvailable] = useState(true);
  const [imageSuperhero, SetImageSuperhero] = useState('');
  const [name, SetName] = useState('')
  const [powerStats, SetPowerStats] = useState({});
  const [biography, SetBiography] = useState({});
  const [appearance, SetAppearance] = useState({});
  const [work, SetWork] = useState({});
  const [connections, SetConnection] = useState({});


  useEffect(() => {
    getSuperHeroById(superheroId).then((data) => {
      data ? SetSuperheroDetails(data) : SetSuperheroAvailable(false);
    }).catch(() => {
      SetSuperheroAvailable(false);
    })
  }, [])

  useEffect(() => {
    const { images, powerstats, biography, appearance, work, connections, name } = superheroDetails ? superheroDetails : '';
    const { md } = images ? images : '';
    SetImageSuperhero(md)
    SetName(name);
    SetPowerStats(() => {
      return { ...powerstats }
    })
    SetBiography(() => {
      return { ...biography }
    });

    SetAppearance(() => {
      return { ...appearance }
    })
    SetWork(() => {
      return { ...work }
    })
    SetConnection(() => {
      return { ...connections }
    })

  }, [superheroDetails])

  console.log(superheroDetails)

  return (
    <>
      {superheroDetails && superheroAvailable ? (
        <>
          <NavBar />
          <h3><strong> Profile of {name}</strong></h3>
          <Container bsPrefix="container">
            <Row bsPrefix='row-container'>
              <Col bsPrefix='left-col'>
                <div className='inner-left-col'>
                  <img src={imageSuperhero}></img>
                </div>
              </Col>
              <Col bsPrefix='right-col'>
                <SuperHeroStats label='PowerStats' obj={powerStats} />
                <SuperHeroStats label='BioGraphy' obj={biography} />
                <SuperHeroStats label='Apperance' obj={appearance} />
                <SuperHeroStats label='Connections' obj={connections} />
                <SuperHeroStats label='Work' obj={work} />
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <NotFound />
      )}

    </>
  )
}

export default SuperheroDetails;