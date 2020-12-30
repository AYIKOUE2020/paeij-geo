import React from "react"
import { Card, Button } from "react-bootstrap"

const PopupContainer = (item) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant='top'
        src='https://paeij-photos.i2setg.com/media/1603020250937.jpg'
      />
      <Card.Body>
        <Card.Title>{item.composante}</Card.Title>
        <Card.Text>infos</Card.Text>
        <Button variant='primary'>Détails</Button>
      </Card.Body>
    </Card>
  )
}

export default PopupContainer
