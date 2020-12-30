import React from "react"
import { useParams } from "react-router-dom"

const Groupement = () => {
  const { id } = useParams()
  return <div>Groupement {id}</div>
}

export default Groupement
