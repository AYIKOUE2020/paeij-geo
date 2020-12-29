import React, { useEffect, useState } from "react"
import { Card,Button } from "react-bootstrap"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useDispatch, useSelector } from "react-redux"
import ReactLeafletKml from "react-leaflet-kml"
import { useParams } from "react-router-dom"
import queryString from "query-string"
import {
  blueMarker,
  greenMarker,
  orangeMarker,
  pinkMarker,
} from "../components/customIcons"
import { getRealisations } from "../store/actions/dashboardAction"


const MapComponent = () => {
  let { composante } = useParams()
  const parsed = {
    composante,
  }
  const stringified = queryString.stringify(parsed, {
    skipNull: true,
    skipEmptyString: true,
  })
  const dispatch = useDispatch()
  const [tgKml, setTgKml] = useState(null)
  const realisations = useSelector(
    (state) => state.realisationsList.realisations
  )

  const position = [8.6, 1]
  useEffect(() => {
    dispatch(getRealisations(stringified))
  }, [stringified, dispatch])

  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/http://i2setg.com/kml/TGO.kml")
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser()
        const kml = parser.parseFromString(kmlText, "text/xml")
        setTgKml(kml)
      })
  }, [])

  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {tgKml && <ReactLeafletKml kml={tgKml} />}
      {realisations &&
        realisations.map((item) => (
          <Marker
            position={[item.latitude, item.longitude]}
            key={item.id}
            icon={
              item.composante === "Agregatrice"
                ? greenMarker
                : item.composante === "Structurante"
                ? pinkMarker
                : item.composante === "Primo"
                ? blueMarker
                : orangeMarker
            }
          >
            <Popup>
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
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}

export default MapComponent
