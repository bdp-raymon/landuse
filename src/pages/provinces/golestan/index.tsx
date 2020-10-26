import * as React from "react"
import Province from "components/province"

import Map from "maps/iran/golestan.svg"
import Provinces from "fixtures/provinces.json"

export default function () {
  return (
    <Province
      province={Provinces["IR-24"]}
      SVG={Map}
    ></Province>
  )
}
