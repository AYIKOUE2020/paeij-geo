import React from "react"
import { useParams } from "react-router-dom"

const ChaineValeurMapContainer = () => {
  let { filiere } = useParams()
  return <div>{filiere}</div>
}

export default ChaineValeurMapContainer
