import * as React from "react"
import Province from "components/province"

import Map from "maps/iran/fars.svg"
import Provinces from "fixtures/provinces.json"

export default function () {
  return (
    <Province
      province={Provinces["IR-17"]}
      SVG={Map}
    ></Province>
  )
}
