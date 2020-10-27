import * as React from "react"
import { navigate } from "gatsby"
import Map from "components/map"
import MapList from "components/map-list"

import IranMap from "maps/iran.svg"
import Provinces from "fixtures/provinces.json"
import Container from "components/container"

export default function Home() {
  const [hovered, setHovered] = React.useState<string | null>(null)

  const navigateToProvince = (code: string) => {
    navigate("provinces/" + Provinces[code].en)
  }

  return (
    <div className="w-full">
      <div
        className="bg-black w-full h-64 flex flex-col justify-center items-center pr-24"
        style={{
          backgroundImage: "url(/slider.jpg)",
          height: "40rem",
          backgroundPosition: "100% 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-row">
          <div className="flex w-1/3">
            <div />
          </div>
          <div className="flex flex-col w-2/5">
            <p className="text-4xl text-yellow-500">
              مسئولان برای ایجاد اشتغال شب و روز نشناسند
            </p>
            <p className="text-3xl leading-10 text-white">
              مجموعه‌ای که برای ایجاد اشتغال در کشور کار می‌کند، بایدمثل اتاق
              جنگِ دوران دفاع مقدّس که شب و روز نمی‌شناخت، کار کند.
            </p>
            <div className="mt-8 text-white">
              <p>رهبر انقلاب</p>
              <p>۸۱-۰۱-۰۹</p>
            </div>
          </div>
        </div>
      </div>

      <Container title="نقشه">
        <div className="flex justify-center px-12 py-8">
          <div className="flex-1">
            <MapList
              link={code => "provinces/" + Provinces[code].en}
              data={Provinces}
              onHover={province => setHovered(province)}
              onLeave={() => setHovered(null)}
              focus={hovered}
            />
          </div>

          <div className="flex px-8">
            <Map
              SVG={IranMap}
              onHover={province => setHovered(province)}
              onLeave={() => setHovered(null)}
              onSelect={navigateToProvince}
              focus={hovered}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
