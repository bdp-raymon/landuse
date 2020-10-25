import React from "react"

type JobTableType = {
  items: Array<Array<string>>
}

const JobTable: React.FC<JobTableType> = ({ items }) => {
  const body = items.map((item, index) => (
    <tr key={"item" + index}>
      <td className="border px-4 py-2">{index + 1}</td>
      {item.map((subItem, index) => (
        <td key={"subItem" + index} className="border px-4 py-2">
          {subItem}
        </td>
      ))}
    </tr>
  ))

  return (
    <table className="table-auto bg-white my-4 rounded">
      <thead>
        <tr>
          <th className="border px-4 py-2" />
          <th colSpan={5} className="border px-4 py-2">
            کشاورزی
          </th>
          <th colSpan={4} className="border px-4 py-2">
            صنایع
          </th>
          <th className="border px-4 py-2">خدمات</th>
        </tr>
        <tr>
          <th className="border px-4 py-2">ردیف</th>
          <td className="border px-4 py-2">دامداری</td>
          <td className="border px-4 py-2">باغداری</td>
          <td className="border px-4 py-2">زراعت</td>
          <td className="border px-4 py-2">طیور</td>
          <td className="border px-4 py-2">شیلات</td>
          <td className="border px-4 py-2">صنایع غذایی</td>
          <td className="border px-4 py-2">صنایع تبدیلی و تکمیلی</td>
          <td className="border px-4 py-2">صنعت</td>
          <td className="border px-4 py-2">صنایع دستی</td>
          <td className="border px-4 py-2">خدمات</td>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  )
}

export default JobTable
