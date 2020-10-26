import * as React from "react"

const Footer = () => {
  return (
    <div className="px-8 py-4 bg-gray-400 relative bottom-0">
      <div className="flex flex-row-reverse items-center space-x-4">
        <div>
          <a href="#">
            <img width="30px" height="30px" src="/telegram.svg" alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img width="30px" height="30px" src="/instagram.svg" alt="" />
          </a>
        </div>
        <div>
          <p className="py-2 px-4 rounded-full bg-white">@emdadjob</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
