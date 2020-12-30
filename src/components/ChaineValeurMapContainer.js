import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useDispatch, useSelector } from "react-redux"
import ReactLeafletKml from "react-leaflet-kml"
import { useParams } from "react-router-dom"
import {
  blueMarker,
  greenMarker,
  orangeMarker,
  pinkMarker,
} from "../components/customIcons"
import Loader from "./Loader"
import Notification from "./Notification"
import PopupContainer from "./PopupContainer"
import { getChaineValeur } from "../store/actions/chaineValeurAction"

const ChaineValeurMapComponent = () => {
  let { filiere } = useParams()
  console.log(filiere)
  const dispatch = useDispatch()
  const [tgKml, setTgKml] = useState(null)
  const filieresList = useSelector((state) => state.filieresList)

  const { loading, error, filieres } = filieresList

  const position = [8.6, 1]
  useEffect(() => {
    dispatch(getChaineValeur(filiere))
  }, [filiere, dispatch])

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

      {filieres &&
        filieres.map((item) => (
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

export default ChaineValeurMapComponent
