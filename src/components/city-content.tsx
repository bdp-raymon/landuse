import React from "react"
import VerticalNavbar from "./vertical-navbar"
import AdvantageTable from "./advantage-table"

type TODO = any

type CityContentType = {
  menu: TODO
  city: TODO
  children: React.ReactNode
}

const CityContent: React.FC<CityContentType> = ({ menu, city, children }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col sticky overflow-y-auto top-0 z-10">
        <h3 className="bg-teal-400 p-4 text-2xl text-center text-gray-200">
          {city.fa}
        </h3>
      </div>

      <div className="xl:container mx-auto">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="hidden lg:block">
            <div
              className="flex flex-col sticky overflow-y-auto"
              style={{ top: "5rem" }}
            >
              <VerticalNavbar items={menu} />
            </div>
          </div>
          <div className="flex-1 pl-8 pr-12 bg-white py-8">{children}</div>
          <div className="flex flex-col">
            <div className="sticky overflow-y-auto bottom-0">
              <AdvantageTable items={city.advantage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityContent
