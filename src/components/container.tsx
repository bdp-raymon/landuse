import React, { CSSProperties, ReactNode } from "react"
import { Style } from "util"

export interface ContainerProps {
  title: string
  children: ReactNode
  bg?: string
}

const Container: React.FC<ContainerProps> = ({
  title,
  bg = "gray-300",
  children,
}) => {
  return (
    <div
      id="container"
      data-content={title}
      className={`relative bg-${bg} hossein-container`}
    >
      {children}
    </div>
  )
}

export default Container
