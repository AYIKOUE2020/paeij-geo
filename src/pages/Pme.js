import React from "react"
import { useParams } from "react-router-dom"

const Pme = () => {
  const { id } = useParams()
  return <div>Pme - {id}</div>
}

export default Pme
