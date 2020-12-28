import React, { useEffect } from "react"
import { Card } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useDispatch, useSelector } from "react-redux"
import { getRealisations } from "../store/actions/dashboardAction"

const Realisations = () => {
  const dispatch = useDispatch()

  const realisations = useSelector(
    (state) => state.realisationsList.realisations
  )

  const position = [8, 1]
  console.log(realisations)
  useEffect(() => {
    dispatch(getRealisations())
  }, [dispatch])

  return (
    <div>
      <Helmet>
        <title>Cartographie des réalisations</title>
      </Helmet>
      <h1>Cartographie des réalisations</h1>
      <Card body className='border-0 shadow p-0'>
        <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Card>
    </div>
  )
}

export default Realisations
