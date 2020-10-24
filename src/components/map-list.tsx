import * as React from "react"
// @ts-ignore

import { FaPeriscope } from "react-icons/fa"
import { City } from "../types/City"
import { Province } from "../types/Province"

type MapListType = {
  data: Record<string, City> | Record<string, Province>
  focus?: string | null
  onSelect: (code: string) => void
  onHover: (code: string) => void
  onLeave: () => void
}

const MapList: React.FC<MapListType> = ({
  data,
  focus,
  onSelect,
  onHover,
  onLeave,
}) => {
  const List = () => {
    const items = Object.keys(data).map(code => {
      const item = data[code]

      return (
        <li
          className={"flex flex-row items-center cursor-pointer"}
          onMouseOver={() => onHover(code)}
          onMouseOut={onLeave}
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
            {item.fa}
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

export default MapList
