import React from "react"
import ReactTooltip from 'react-tooltip';
import "./src/styles/global.css"
import Header from './src/components/header'
import Footer from './src/components/footer'

export const wrapPageElement = ({ element, props }) => {
  return (
    <div {...props}>
      <ReactTooltip />
      <Header />
      {element}
      <Footer />
    </div>
  )
}
