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

//Cluster Menu
export const clusterSidebarMenu = [
  { name: "AGROKOM", short: "agrokom", link: "agrokom" },
  { name: "AUDELA", short: "audela", link: "audela" },
  {
    name: "Agro- Vision - Initiatives (AVI) Sarl",
    short: "avi",
    link: "agro-vision-initiatives-avi-sarl",
  },
  { name: "CAT Sarl", short: "cat", link: "cat-sarl" },
  {
    name: "Ets AL WALID Agrobusiness",
    short: "walid",
    link: "ets-al-walid-agrobusiness",
  },
  {
    name: "Food and Home International",
    short: "International",
    link: "food-and-home-international",
  },
  {
    name: "Gold Food Africa Sarl",
    short: "gold",
    link: "gold-food-africa-sarl",
  },
  { name: "JCAT Sarl", short: "jcat", link: "jcat-sarl" },
  { name: "NSCPA", short: "nscpa", link: "nscpa" },
  { name: "PME Kossi", short: "kossi", link: "pme-kossi" },
  { name: "SAM Sarl", short: "sam", link: "sam-sarl" },
  { name: "SCOOPS COACOM", short: "coacom", link: "scoops-coacom" },
  { name: "TOGO TRADE HUB", short: "togo", link: "togo-trade-hub" },
  { name: "ALCASA", short: "alcasa", link: "alcasa" },
  { name: "QSI", short: "qsi", link: "qsi" },
  { name: "SCOOPS RVPBT", short: "rvpbt", link: "scoops-rvpbt" },
]
