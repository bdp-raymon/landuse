import React from "react"
import "./src/styles/global.css"
import Header from "./src/components/header"
import Footer from "./src/components/footer"

export const wrapPageElement = ({ element, props }) => {
  return (
    <div>
      <div className="flex flex-col bg-gray-300" style={{ minHeight: "100vh" }}>
        <div className="w-full">
          <Header />
        </div>
        <div className="flex flex-1 w-full">{element}</div>
        <Footer />
      </div>
    </div>
  )
}
