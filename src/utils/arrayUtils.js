//Transformer le tableau unidimensionnel de répartition des bénéficiaires
// par région en un tableau à 2 dimension
export const transform = (data) => {
  return Object.keys(data).map((item) => {
    return {
      region: item,
      groupement: data[item]
        .map((reg) => reg.groupement && reg.groupement)
        .filter((x) => x)[0],
      primo: data[item]
        .map((reg) => reg.primo && reg.primo)
        .filter((x) => x)[0],
    }
  })
}

//Nombre de bénéficiaires ayant  mené une activité au cours des
//différentes campagnes avec le Projet
export const benefByCampObjectToArray = (data) => {
  const campagnes = ["2017-2018", "2018-2019", "2019-2020", "2020-2021"]
  return campagnes.map((item) => {
    return {
      campagne: item,
      structurante: data["Structurante"][item],
      agregatrice: data["Agregatrice"][item],
      groupement: data["Groupement"][item],
      primo: data["Primo"][item],
    }
  })
}
