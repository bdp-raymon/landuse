import React from "react"

type SectionType = {
  id: string
  title: string
  children: React.ReactNode
}

const Section: React.FC<SectionType> = ({ id, title, children }) => {
  return (
    <section className="bg-white rounded my-8">
      <h3 id={id} className="group flex mb-4 whitespace-pre-wrap text-2xl">
        <a
          className="absolute text-gray-500 no-underline -mr-6 after:hash opacity-0 group-hover:opacity-100"
          href={"#" + id}
        />
        <span>{title}</span>
      </h3>
      <div className="leading-8 text-justify">{children}</div>
    </section>
  )
}

export default Section
