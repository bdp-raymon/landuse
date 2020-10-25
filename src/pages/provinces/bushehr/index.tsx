import * as React from "react"
import Provinces from "fixtures/provinces.json"
import BushehrMap from "maps/iran/bushehr.svg"
import Province from "components/province"

export default function () {
  return <Province province={Provinces["IR-07"]} SVG={BushehrMap}></Province>
}
