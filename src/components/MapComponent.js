import React, { useEffect, useState } from "react"
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
import Loader from "./Loader"
import Notification from "./Notification"
import PopupContainer from "./PopupContainer"

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
  const realisationsList = useSelector((state) => state.realisationsList)

  const { loading, error, realisations } = realisationsList

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

  if (error) {
    return (
      <Notification variant='danger'>
        {error === "Network Error" &&
          "Aucune connexion à internet, Prière vous connectez à internet"}
      </Notification>
    )
  }

  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {tgKml && <ReactLeafletKml kml={tgKml} />}
      {loading && <Loader />}

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
              <PopupContainer item={item} />
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}

export default MapComponent
