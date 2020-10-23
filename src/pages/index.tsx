import * as React from "react"
import Iran from "../components/maps/iran"
import { navigate } from "gatsby"
import ProvincesList from "../components/provinces-list"
import Provinces from "../fixtures/provinces.json"

export default function Home() {
  const [hovered, setHovered] = React.useState<string | null>(null)

  const navigateToProvince = (code: string) => {
    navigate("provinces/" + Provinces[code].en)
  }

  return (
    <div>
      <p className="text-center">iran map</p>
      <div className="flex justify-center">
        <div className="flex-1 ml-8">
          <ProvincesList
            onSelect={navigateToProvince}
            onHover={province => setHovered(province)}
            focus={hovered}
          />
        </div>

        <div className="flex px-12">
          <Iran
            onHover={province => setHovered(province)}
            onSelect={navigateToProvince}
            focus={hovered}
          />
        </div>
      </div>
    </div>
  )
}
