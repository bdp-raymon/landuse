import * as React from "react"

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-8 py-4 bg-blue-200">
      <div>logo</div>
      <div className="text-center">
        <p>بسمه تعالی</p>
        <h3 className="text-lg">سامانه جامع مزیت سنجی شغلی ایران</h3>
        <p className="text-sm">
          معاونت اشتغال و خودکفایی کمیته امداد امام خمینی(ره)
        </p>
      </div>
      <div>logo</div>
    </div>
  )
}

export default Header
