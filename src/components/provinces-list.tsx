import * as React from "react"
// @ts-ignore
import Provinces from "../fixtures/provinces.json"
import { FaPeriscope } from "react-icons/fa"

type ProvincesListType = {
  focus?: string | null
  onSelect: (code: string) => void
  onHover: (code: string) => void
}

const ProvincesList: React.FC<ProvincesListType> = ({
  focus,
  onSelect,
  onHover,
}) => {
  const List = () => {
    const items = Object.keys(Provinces).map(code => {
      const province = Provinces[code]

      return (
        <li
          className={"flex flex-row items-center cursor-pointer"}
          onMouseOver={() => onHover(code)}
          onClick={() => onSelect(code)}
        >
          <div className="z-10 rounded-full bg-red-200 p-4">
            <FaPeriscope />
          </div>

          <span
            className={
              "-mr-2 flex-1 py-1 pl-2 rounded pr-4" +
              " " +
              (code === focus ? "bg-green-400" : "bg-blue-400")
            }
          >
            {province.fa}
          </span>
        </li>
      )
    })

    return <ul className="grid grid-cols-3 gap-x-2 gap-y-4 ">{items}</ul>
  }

  return (
    <div>
      <List />
    </div>
  )
}

export default ProvincesList
