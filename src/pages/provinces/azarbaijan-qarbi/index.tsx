import * as React from "react"
import Province from "components/province"

import AzerbaijanQarbiMap from "maps/iran/azarbaijan-qarbi.svg"
import Provinces from "fixtures/provinces.json"

export default function () {
  return (
    <Province province={Provinces["IR-02"]} SVG={AzerbaijanQarbiMap}></Province>
  )
}
