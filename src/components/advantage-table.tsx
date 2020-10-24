import React from "react"

type AdvantageTableType = {
  items: Array<string>
}

const AdvantageTable: React.FC<AdvantageTableType> = ({ items }) => {
  const body = items.map((item, index) => (
    <tr>
      <td className="border px-4 py-2">{item}</td>
      <td className="border px-4 py-2">{index + 1}</td>
    </tr>
  ))

  return (
    <table className="table-auto bg-white my-4 rounded">
      <thead>
        <tr>
          <th className="border px-4 py-2">مشاغل</th>
          <th className="border px-4 py-2">مزیت</th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  )
}

export default AdvantageTable
