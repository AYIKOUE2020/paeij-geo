import React from "react"
import { Col, Row, Card } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import { HiArrowRight } from "react-icons/hi"
import { MdSettingsInputComponent } from "react-icons/md"
import { BiCustomize } from "react-icons/bi"
import { RiBuildingLine } from "react-icons/ri"
import { FaCheckSquare } from "react-icons/fa"
import { VscOrganization } from "react-icons/vsc"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Accueil</title>
      </Helmet>
      <Apropos />
    </div>
  )
}

const Apropos = () => (
  <div className='a-propos'>
    <h1 className=''>Présentation du PAEIJ-SP</h1>
    <Row>
      <Col xs={12} md={6}>
        <p>
          Afin de favoriser la promotion de l’entreprenariat dans le secteur
          agricole, l’État Togolais, à travers le ministre du développement à la
          base de l’Artisanat, de la jeunesse et de l’Emploi des jeunes dans les
          Secteurs Porteurs a mis en place le Projet d’appui à l’employabilité
          et à l’insertion des jeunes dans les secteurs porteurs (PAEIJ-SP).
        </p>
      </Col>
      <Col xs={12} md={6}>
        <img
          alt='Bénéficiaire PAEIJ'
          src={`${process.env.PUBLIC_URL}/img/photoPaeij.jpg`}
          width='100%'
        />
      </Col>
      <Col className='mt-3'>
        <p>
          Son objectif premier est de contribuer à créer les conditions d’une
          croissance économique plus inclusive à travers le renforcement de
          l’employabilité des jeunes et la promotion de l’entrepreneuriat des
          jeunes dans les secteurs porteurs par l’approche chaine de valeur
          agricole et le développement de clusters agro-industriels. Cette
          approche est combinée avec l’approche « faire-faire ».
        </p>
      </Col>
    </Row>
    <h2 className='my-3'>Groupes cibles</h2>
    <Row>
      <Col sm={12} md={6}>
        <Card className='shadow card__paeij mb-3'>
          <Card.Body as='p'>
            Producteurs et éleveurs (en coopératives commerciales) dont 40% de
            femmes
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6}>
        <Card className='shadow card__paeij mb-3'>
          <Card.Body as='p'>
            Jeunes hommes et femmes de 18 à 45 ans désireux de porter des
            initiatives entrepreneuriales individuelles
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className=''>
      <Col sm={12} md={6}>
        <Card className='shadow card__paeij mb-3'>
          <Card.Body as='p'>
            Femmes issues des villages enclavés et vulnérables
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6}>
        <Card className='shadow card__paeij mb-3'>
          <Card.Body as='p'>
            Petites et moyennes entreprises structurante (transformatrices,
            agrégatrice) établies
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <h2 className='my-3'>Filières ciblées</h2>
    <Row>
      <Col>
        <p className='d-flex align-items-center'>
          <FaCheckSquare color='#116c52' />
          <span className='ml-3'>
            Soja (y compris les semences certifiées de soja)
          </span>
        </p>
        <p className='d-flex align-items-center'>
          <FaCheckSquare color='#116c52' /> <span className='ml-3'>Maïs</span>
        </p>
        <p className='d-flex align-items-center'>
          <FaCheckSquare color='#116c52' /> <span className='ml-3'>Manioc</span>
        </p>
        <p className='d-flex align-items-center'>
          <FaCheckSquare color='#116c52' />
          <span className='ml-3'>Volailles</span>
        </p>
        <p className='d-flex align-items-center'>
          <FaCheckSquare color='#116c52' />
          <span className='ml-3'>Petits ruminants ; etc.</span>
        </p>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col>
        <h2 className=''>Zones d’intervention</h2>
        <p className='d-flex align-items-center'>
          Territorial national, avec une forte concentration des activités dans
          les régions les plus pauvres (savanes, centrale et plateaux).
        </p>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col>
        <p>
          <a href='https://www.paeijsp.com/' target='_blank' rel='noreferrer'>
            En savoir plus <HiArrowRight />
          </a>
        </p>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col>
        <h1 className=''>Présentation synthétique du géo-référencement</h1>
        <p>
          Fort des résultats intéressants enregistrés par le projet, la revue à
          mi-parcours du projet réalisée en décembre 2018 a recommandé de rendre
          visibles et accessibles ces résultats aux parties prenantes du projet
          via un système d’information géographique. Ce qui nécessite la mise en
          place d’un système d’information géographique. En vue de mettre en
          place un système d’information géographique du projet, l’UGP veut
          réaliser une étude de géolocalisation des réalisations du projet.
        </p>
        <p>
          La géolocalisation a consisté à faciliter l’identification et le
          repérage des petites et moyennes entreprises (PME), des petites et
          moyennes industries (PMI) et des micro-entreprises accompagnées par le
          PAEIJ-SP en relevant leurs coordonnées GPS, en les photographiant et
          en collectant des informations relatives à leurs activités. Il s’agira
          de faire un géo référencement des réalisations du projet. Notons que
          le géoréférencement, selon Wikipédia, est le processus dans lequel on
          applique à une entité cartographique un emplacement spatial en lui
          donnant des coordonnées géographiques et en appliquant une
          transformation. C’est une action qui consiste à relier un objet et les
          données, les géo-références, qui y sont associées à sa position dans
          l'espace par rapport à un système de coordonnées géographiques.
        </p>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col>
        <h1 className=''>Quelques résultats</h1>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col>
        <h3 className='text-center'>
          Nombre de bénéficiaires par composante ayant effectivement participé à
          la collecte pour le géoréférencement
        </h3>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col sm={12} md={6} lg={3}>
        <Card className='shadow border-0 mb-3 text-center'>
          <Card.Body>
            <Card.Title>
              <MdSettingsInputComponent
                size='2rem'
                className='m-0'
                color='#116c52'
              />
            </Card.Title>
            <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>12</span>
            <p className='m-0 text-uppercase' style={{ color: "#ffce1a" }}>
              Structurante
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3}>
        <Card className='shadow border-0 mb-3 text-center'>
          <Card.Body>
            <Card.Title>
              <BiCustomize size='2rem' className='m-0' color='#116c52' />
            </Card.Title>
            <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>10</span>
            <p className='m-0 text-uppercase' style={{ color: "#ffce1a" }}>
              Agregatrice
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3}>
        <Card className='shadow border-0 mb-3 text-center'>
          <Card.Body>
            <Card.Title>
              <VscOrganization size='2rem' className='m-0' color='#116c52' />
            </Card.Title>
            <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              1 465
            </span>
            <p className='m-0 text-uppercase' style={{ color: "#ffce1a" }}>
              Groupement
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3}>
        <Card className='shadow border-0 mb-3 text-center'>
          <Card.Body>
            <Card.Title>
              <RiBuildingLine size='2rem' className='m-0' color='#116c52' />
            </Card.Title>
            <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>878</span>
            <p className='m-0 text-uppercase' style={{ color: "#ffce1a" }}>
              Primo
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col>
        <h3 className='text-center'>
          Répartition des bénéficiaires (Groupements et Primos) par région
        </h3>
      </Col>
    </Row>

    <Row className='mt-3'>
      <Col>
        <p>
          <Link to='/statistiques'>
            Détails <HiArrowRight />
          </Link>
        </p>
      </Col>
    </Row>
  </div>
)

export default Home
