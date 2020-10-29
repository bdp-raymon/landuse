import * as React from "react"
import Provinces from "fixtures/provinces.json"
import Select, { ActionMeta, ValueType } from "react-select"
import { navigate } from "gatsby"
import { SearchItem } from "types/SearchItem"

const Search: React.FC = () => {
  let provinces: SearchItem[] = []
  let cities: SearchItem[] = []
  Object.keys(Provinces).map((key: string) => {
    const cityList = Object.keys(Provinces[key].cities).map(
      (cityKey: string) => ({
        label: Provinces[key].cities[cityKey].fa,
        value: Provinces[key].cities[cityKey].en,
        provinceValue: Provinces[key].en,
      })
    )
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

  const onSelect = (value: ValueType<any>, action: ActionMeta<SearchItem>) => {
    if (value && action.action === "select-option") {
      const url = value.provinceValue
        ? `/provinces/${value.provinceValue}/cities/${value.value}`
        : `/provinces/${value.value}`
      navigate(url)
    }
  }

  return (
    <div className="flex flex-row bg-red-600 rounded">
      <span className="text-white px-2 text-center align-middle h-full self-center">
        جستجو
      </span>
      <div className="w-full">
        <Select
          value={null}
          options={groupedOptions}
          onChange={onSelect}
          placeholder="جستجو..."
          isRtl
          isSearchable
          styles={{
            menu: (provided, state) => ({
              ...provided,
              zIndex: 99,
            }),
          }}
        />
      </div>
    </div>
  )
}

export default Search
