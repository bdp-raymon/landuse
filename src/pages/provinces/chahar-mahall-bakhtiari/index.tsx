import * as React from "react"
import Provinces from "fixtures/provinces.json"
import ChaharMap from "maps/iran/chahar-mahall-bakhtiari.svg"
import Province from "components/province"

export default function () {
  return <Province province={Provinces["IR-09"]} SVG={ChaharMap}></Province>
}
