import React from "react"

type SectionType = {
  id: string
  title: string
  children: React.ReactNode
  size?: "h2" | "h3"
}

const Section: React.FC<SectionType> = ({
  id,
  title,
  children,
  size = "h2",
}) => {
  const Link = () => (
    <>
      <a
        className="absolute text-gray-500 no-underline -mr-6 after:hash opacity-0 group-hover:opacity-100"
        href={"#" + id}
      />
      <span>{title}</span>
    </>
  )

  const Head = () => {
    switch (size) {
      case "h2":
        return (
          <h2 id={id} className="group flex mb-4 whitespace-pre-wrap text-2xl">
            <Link />
          </h2>
        )
      case "h3":
        return (
          <h3 id={id} className="group flex mb-4 whitespace-pre-wrap text-xl">
            <Link />
          </h3>
        )
    }
  }

  return (
    <section className="bg-white rounded py-8">
      <Head />
      <div className="leading-8 text-justify">{children}</div>
    </section>
  )
}

export default Section
