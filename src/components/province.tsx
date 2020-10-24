import * as React from "react"
import { navigate } from "gatsby"
import Map from "./map"
import type { Province as ProvinceModel } from "../types/Province"

type ProvinceType = {
  children: React.ReactNode
  SVG: React.ReactNode
  province: ProvinceModel
}

const Province: React.FC<ProvinceType> = ({ children, SVG, province }) => {
  const [hovered, setHovered] = React.useState<string | null>(null)

  const navigateToCity = (code: string) => {
    navigate("provinces/" + province.en + "/cities" + province.cities[code].en)
  }

  return (
    <div className="flex flex-row">
      <div>{children}</div>
      <div>
        <Map
          SVG={SVG}
          focus={hovered}
          onHover={city => setHovered(city)}
          onLeave={() => setHovered(null)}
          onSelect={navigateToCity}
        />
      </div>
    </div>
  )
}

export default Province
