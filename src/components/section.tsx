import React from "react"

type SectionType = {
  title: string
  children: React.ReactNode
}

const Section: React.FC<SectionType> = ({ title, children }) => {
  return (
    <section>
      <h4 className="text-2xl">{title}</h4>
      <div>{children}</div>
    </section>
  )
}

export default Section
