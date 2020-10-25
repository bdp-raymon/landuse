import * as React from "react"
import Provinces from "fixtures/provinces.json"
import EsfahanMap from "maps/iran/esfahan.svg"
import Province from "components/province"

export default function () {
  return <Province province={Provinces["IR-04"]} SVG={EsfahanMap}></Province>
}
