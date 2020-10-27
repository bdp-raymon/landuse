import * as React from "react"
import Telegram from 'assets/img/telegram.svg'
import Instagram from 'assets/img/instagram.svg'

const Footer = () => {
  return (
    <div className="px-8 py-4 bg-gray-400 relative bottom-0">
      <div className="flex flex-row-reverse items-center space-x-4">
        <div>
          <a href="#">
            <Telegram className="w-8 h-8"/>
            {/*<img width="30px" height="30px" src={telegram} alt="" />*/}
          </a>
        </div>
        <div>
          <a href="#">
            <Instagram className="w-8 h-8" />
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
