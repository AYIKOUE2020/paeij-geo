import React, { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import MaterialTable from "material-table"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import Notification from "../components/Notification"
import { getRealisations } from "../store/actions/dashboardAction"
import { tableLabelFr } from "../utils/constants"
import { useHistory } from "react-router-dom"

const Liste = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const realisationsList = useSelector((state) => state.realisationsList)

  const { loading, error, realisations } = realisationsList

  const handleDetails = (rowData) => {
    const composante =
      rowData.composante === "Primo"
        ? "primo"
        : rowData.composante === "Groupement"
        ? "groupement"
        : "pme"
    const path = `/${composante}/${rowData.id}`
    history.push(path)
  }

  useEffect(() => {
    dispatch(getRealisations(null))
  }, [dispatch])

  return (
    <div>
      <Helmet>
        <title>Liste des réalisations</title>
      </Helmet>
      <Card body className='border-0 shadow p-0'>
        {loading && <Loader />}
        {error && (
          <Notification variant='danger'>
            {error === "Network Error" &&
              "Aucune connexion à internet, Prière vous connectez à internet"}
          </Notification>
        )}
        {
          <MaterialTable
            title='Liste des réalisations'
            columns={[
              {
                title: "Photo",
                field: "photo_image1",
                render: (rowData) => (
                  <img
                    src={`https://paeij-photos.i2setg.com/media/${rowData.photo_image1}`}
                    style={{ width: 50, height: 50, borderRadius: "50%" }}
                    alt=''
                  />
                ),
              },
              {
                title: "Bénéficiaire",
                field: "details.nom",
              },
              {
                title: "Composante",
                field: "composante",
              },
              {
                title: "Campagne",
                field: "campagne",
                render: (rowData) =>
                  rowData.campagne && rowData.campagne.join(" | "),
              },
              {
                title: "Filière",
                field: "filiere",
              },
              {
                title: "Domaine",
                field: "domaine",
              },
              {
                title: "Région",
                field: "region",
              },
              {
                title: "Préfecture",
                field: "prefecture",
              },
              {
                title: "Canton",
                field: "canton",
              },
              {
                title: "Village",
                field: "village",
              },
              {
                title: "Détails",
                field: "village",
                render: (rowData) => (
                  <Button
                    variant='outline-dark'
                    onClick={() => handleDetails(rowData)}
                  >
                    Détails
                  </Button>
                ),
              },
            ]}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
            }}
            localization={tableLabelFr}
            data={realisations}
          />
        }
      </Card>
    </div>
  )
}

export default Liste
