import React from "react"
import { Fragment } from "react"
import {
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Badge,
} from "react-bootstrap"
import { HiArrowRight } from "react-icons/hi"
import { useHistory } from "react-router-dom"

const PopupContainer = ({ item }) => {
  const history = useHistory()
  const handleDetails = () => {
    const composante =
      item.composante === "Primo"
        ? "primo"
        : item.composante === "Groupement"
        ? "groupement"
        : "pme"
    const path = `/${composante}/${item.id}`
    history.push(path)
  }

  return (
    <Card style={{ width: "300px" }}>
      <Card.Img
        variant='top'
        src={`https://paeij-photos.i2setg.com/media/${item.photo_image1}`}
      />
      <Card.Body className='py-1'>
        <span>Nom</span>
        <Card.Title className='m-0'>{item.details.nom}</Card.Title>
      </Card.Body>
      <ListGroup variant='flush'>
        <ListGroupItem>
          <Row className='align-items-center'>
            <Col md={6}>Composante</Col>
            <Col md={6} className='font-weight-bold'>
              {item.composante}
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row className='align-items-center'>
            <Col md={6}>Campagne(s)</Col>
            <Col md={6} className='font-weight-bold'>
              {item.campagne &&
                item.campagne.map((camp) => (
                  <Fragment key={camp}>
                    <Badge pill variant='info'>
                      {camp}
                    </Badge>{" "}
                  </Fragment>
                ))}
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row className='align-items-center'>
            <Col md={6}>Filière</Col>
            <Col md={6} className='font-weight-bold'>
              {item.details.filiere}
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row className='align-items-center'>
            <Col md={6}>Localisation</Col>
            <Col md={6} className='font-weight-bold'>
              {item.region}
              {" | "}
              {item.prefecture}
              {" | "}
              {item.canton}
              {" | "}
              {item.village}
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant='outline-dark' onClick={handleDetails}>
          Détails <HiArrowRight />
        </Button>
      </Card.Body>
    </Card>
  )
}

export default PopupContainer
