import * as React from "react"
import { Link } from "gatsby"
import { FaPeriscope } from "react-icons/fa"
import { City } from "../types/City"
import { Province } from "../types/Province"

type MapListType = {
  data: Record<string, City> | Record<string, Province>
  focus?: string | null
  link: (code: string) => string
  onHover: (code: string) => void
  onLeave: () => void
}

const MapList: React.FC<MapListType> = ({
  link,
  data,
  focus,
  onHover,
  onLeave,
}) => {
  const List = () => {
    const items = Object.keys(data).map(code => {
      const item = data[code]
      const path = link(code)
      return (
        <li key={code} onMouseOver={() => onHover(code)} onMouseOut={onLeave}>
          <Link
            className="flex w-full flex-row items-center cursor-pointer"
            to={path}
          >
            <div className="text-2xl text-gray-300 z-10 rounded-full bg-teal-700 p-4 border-1 border-white">
              <FaPeriscope />
            </div>

            <span
              className={
                "-mr-8 flex-1 py-2 rounded-full pr-12 text-white" +
                " " +
                (code === focus ? "bg-teal-800" : "bg-indigo-800")
              }
            >
              {item.fa}
            </span>
          </Link>
        </li>
      )
    })

    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-4 ">
        {items}
      </ul>
    )
  }

  return (
    <div>
      <List />
    </div>
  )
}

export default MapList
