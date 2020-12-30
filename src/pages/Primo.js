import React from "react"
import { useParams } from "react-router-dom"

const Primo = () => {
  const { id } = useParams()
  return <div>Primo {id}</div>
}

export default Primo
