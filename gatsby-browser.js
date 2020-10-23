import React from "react"
import "./src/styles/global.css"
import Header from "./src/components/header"
import Footer from "./src/components/footer"

export const wrapPageElement = ({ element, props }) => {
  return (
    <div {...props}>
      <div className="flex flex-col" style={{ minHeight: "100vh" }}>
        <Header />
        <div className="flex flex-1 px-4 py-8">{element}</div>
        <Footer />
      </div>
    </div>
  )
}
