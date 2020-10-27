import * as React from "react"
import Province from "components/province"

import Map from "maps/iran/semnan.svg"
import Provinces from "fixtures/provinces.json"

export default function () {
  return <Province province={Provinces["IR-15"]} SVG={Map}></Province>
}
