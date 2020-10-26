import * as React from "react"
import Province from "components/province"

import Map from "maps/iran/sistan-baluchestan.svg"
import Provinces from "fixtures/provinces.json"

export default function () {
  return (
    <Province
      province={Provinces["IR-16"]}
      SVG={Map}
    ></Province>
  )
}
