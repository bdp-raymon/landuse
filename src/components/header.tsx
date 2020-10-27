import * as React from "react"
import { Link } from "gatsby"
import Search from "./search"
import Logo from "assets/img/logo.svg"
import flag from "assets/img/flag-iran.png"

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-8 py-4 bg-teal-900">
      <div className="flex flex-col justify-center items-center">
        <Logo width="75px" height="75px" className="mb-2" />
        <p className="mb-1 text-xs text-white">کمیته امداد امام خمینی</p>
        <p className="text-xs text-white">معاونت اشتغال و تحصیل</p>
      </div>
      <div className="text-center">
        <Link to="/">
          <p className="text-sm text-white">بسمه تعالی</p>
          <h3 className="text-3xl text-white mb-2">
            سامانه جامع مزیت سنجی شغلی ایران
          </h3>
          <p className="text-xs text-white">
            معاونت اشتغال و خودکفایی کمیته امداد امام خمینی(ره)
          </p>
        </Link>
      </div>
      <div>
        <img width="75px" height="75px" src={flag} alt="flag of iran" />
      </div>
    </div>
  )
}

export default Header
