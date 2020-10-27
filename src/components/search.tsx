import * as React from "react"
import Provinces from "fixtures/provinces.json"
import Select from "react-select"

const Search: React.FC = () => {
  let provinces: any[] = []
  let cities: any[] = []
  Object.keys(Provinces).map((key: any) => {
    const cityList = Object.keys(Provinces[key].cities).map((cityKey: any) => ({
      label: Provinces[key].cities[cityKey].fa,
      value: Provinces[key].cities[cityKey].en,
    }))
    provinces.push({
      label: Provinces[key].fa,
      value: Provinces[key].en,
    })
    cities.push(...cityList)
  })
  const groupedOptions = [
    {
      label: "استان ها",
      options: provinces,
    },
    {
      label: "شهر ها",
      options: cities,
    },
  ]
  return <Select defaultValue={undefined} options={groupedOptions} />
}

export default Search
