import React, { useState } from "react"
import { Card, Form, Row, Col, Button } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import queryString from "query-string"
import FormContainer from "../components/FormContainer"
import {
  getCantons,
  getPrefectures,
  getVillages,
} from "../store/actions/searchAction"

const Recherche = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const regions = ["Maritime", "Plateaux", "Centrale", "Kara", "Savanes"]

  const [region, setRegion] = useState("")
  const [prefecture, setPrefecture] = useState("")
  const [canton, setCanton] = useState("")
  const [village, setVillage] = useState("")
  const [composante, setComposante] = useState("")
  const [campagne, setCampagne] = useState("")

  const regionChange = (e) => {
    setRegion(e.target.value)
    dispatch(getPrefectures(e.target.value))
  }
  const prefectureChange = (e) => {
    setPrefecture(e.target.value)
    dispatch(getCantons(e.target.value))
  }
  const cantonChange = (e) => {
    setCanton(e.target.value)
    dispatch(getVillages(e.target.value))
  }
  const prefectures = useSelector((state) => state.prefecturesList.prefectures)
  const cantons = useSelector((state) => state.cantonsList.cantons)
  const villages = useSelector((state) => state.villagesList.villages)

  const handleSearch = (e) => {
    e.preventDefault()
    const parsed = {
      region,
      prefecture,
      canton,
      village,
      campagne,
      composante,
    }
    const stringified = queryString.stringify(parsed, {
      skipNull: true,
      skipEmptyString: true,
    })
    history.push(`/realisations?${stringified}`)
  }

  return (
    <div>
      <Helmet>
        <title>Filtrer les réalisations</title>
      </Helmet>
      <FormContainer>
        <Card body className='search border-0 shadow'>
          <h1>Filtrer les réalisations</h1>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group controlId='region'>
                  <Form.Label className='text-bold'>Région</Form.Label>
                  <Form.Control
                    as='select'
                    custom
                    value={region}
                    onChange={regionChange}
                  >
                    <option value=''>Sélectionner</option>
                    {regions.map((region) => (
                      <option value={region} key={region}>
                        {region}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId='prefecture'>
                  <Form.Label>Préfecture</Form.Label>
                  <Form.Control
                    as='select'
                    custom
                    value={prefecture}
                    onChange={prefectureChange}
                  >
                    <option value=''>Sélectionner</option>
                    {prefectures &&
                      prefectures.map((prefecture) => (
                        <option
                          value={prefecture.prefecture}
                          key={prefecture.id}
                        >
                          {prefecture.prefecture}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group controlId='canton'>
                  <Form.Label>Canton</Form.Label>
                  <Form.Control
                    as='select'
                    custom
                    value={canton}
                    onChange={cantonChange}
                  >
                    <option value=''>Sélectionner</option>
                    {cantons &&
                      cantons.map((canton) => (
                        <option value={canton.canton} key={canton.id}>
                          {canton.canton}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId='village'>
                  <Form.Label>Village</Form.Label>
                  <Form.Control
                    as='select'
                    custom
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                  >
                    <option value=''>Sélectionner</option>
                    {villages &&
                      villages.map((village) => (
                        <option value={village.village} key={village.id}>
                          {village.village}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId='composante'>
              <Form.Label>Composante</Form.Label>
              <Form.Control
                as='select'
                custom
                value={composante}
                onChange={(e) => setComposante(e.target.value)}
              >
                <option value=''>Sélectionner</option>
                <option value='structurante'>Structurante</option>
                <option value='agregatrice'>Agregatrice</option>
                <option value='groupement'>Groupement</option>
                <option value='primo'>Primo</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='campagne'>
              <Form.Label>Campagne</Form.Label>
              <Form.Control
                as='select'
                custom
                value={campagne}
                onChange={(e) => setCampagne(e.target.value)}
              >
                <option value=''>Sélectionner</option>
                <option value='1'>2017-2018</option>
                <option value='2'>2018-2019</option>
                <option value='3'>2019-2020</option>
                <option value='4'>2020-2021</option>
              </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Filtrer
            </Button>
          </Form>
        </Card>
      </FormContainer>
    </div>
  )
}

export default Recherche
