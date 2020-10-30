import * as React from "react"
import { navigate } from "gatsby"
import Map from "./map"
import type { Province as ProvinceModel } from "../types/Province"
import MapList from "./map-list"

type ProvinceType = {
  children?: React.ReactNode
  SVG: React.ElementType
  province: ProvinceModel
}

const Province: React.FC<ProvinceType> = ({ children, SVG, province }) => {
  const [hovered, setHovered] = React.useState<string | null>(null)

  const navigateToCity = (code: string) => {
    navigate(
      "/provinces/" + province.en + "/cities/" + province.cities[code].en
    )
  }

  return (
    <div className="w-full">
      <div>
        <h3 className="bg-teal-400 p-4 text-2xl text-center text-gray-200">
          {province.fa}
        </h3>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="flex-1 p-4">
          <MapList
            link={code =>
              "/provinces/" +
              province.en +
              "/cities/" +
              province.cities[code].en
            }
            data={province.cities}
            focus={hovered}
            onHover={city => setHovered(city)}
            onLeave={() => setHovered(null)}
          />
          {children}
        </div>
        <div className="flex-1 py-4 px-8">
          <Map
            SVG={SVG}
            focus={hovered}
            onHover={city => setHovered(city)}
            onLeave={() => setHovered(null)}
            onSelect={navigateToCity}
          />
        </div>
      </div>
    </div>
  )
}

export default Province
