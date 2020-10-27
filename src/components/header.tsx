import * as React from "react"
import { Link } from "gatsby"
import logo from "assets/img/logo.png"
import flag from "assets/img/flag-iran.png"

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-8 py-4 bg-teal-900">
      <div className="flex flex-col justify-center items-center">
        <img width="75px" height="75px" src={logo} alt="committee logo" />
        <div className="flex flex-col justify-center items-center">
          <p className="mb-1 text-xs text-white">کمیته امداد امام خمینی</p>
          <p className="text-xs text-white">معاونت اشتغال و تحصیل</p>
        </div>
      </div>
      <div className="hidden sm:block text-center">
        <Link to="/">
          <p className="text-sm text-white">بسمه تعالی</p>
          <h3 className="text-sm md:text-3xl text-white mb-2">
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
