import React from "react"
import VerticalNavbar from "./vertical-navbar"
import AdvantageTable from "./advantage-table"

type TODO = any

type CityContentType = {
  menu: TODO
  advantage: TODO
  children: React.ReactNode
}

const CityContent: React.FC<CityContentType> = ({
  menu,
  advantage,
  children,
}) => {
  return (
    <div className="w-full">
      <div className="xl:container mx-auto">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="hidden lg:block">
            <VerticalNavbar items={menu} />
          </div>

          <div className="flex-1 pl-8 pr-12 bg-white py-8">{children}</div>
          <div className="flex flex-col">
            <div className="sticky overflow-y-auto bottom-0">
              <AdvantageTable items={advantage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityContent
