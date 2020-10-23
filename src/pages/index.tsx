import * as React from "react"
import { navigate } from "gatsby"
import ProvincesList from "../components/provinces-list"
import Map from "../components/map"

import IranMap from "../maps/iran.svg"
import Provinces from "../fixtures/provinces.json"

export default function Home() {
  const [hovered, setHovered] = React.useState<string | null>(null)

  const navigateToProvince = (code: string) => {
    navigate("provinces/" + Provinces[code].en)
  }

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="flex-1">
          <ProvincesList
            onSelect={navigateToProvince}
            onHover={province => setHovered(province)}
            onLeave={() => setHovered(null)}
            focus={hovered}
          />
        </div>

        <div className="flex px-8">
          <Map
            SVG={IranMap}
            onHover={province => setHovered(province)}
            onLeave={() => setHovered(null)}
            onSelect={navigateToProvince}
            focus={hovered}
          />
        </div>
      </div>
    </div>
  )
}
