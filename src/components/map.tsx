import * as React from "react"
import { useEffect } from "react"
import ReactTooltip from "react-tooltip"

type IranType = {
  SVG: React.ReactNode
  onHover: (city: string) => void
  onLeave: () => void
  onSelect: (city: string) => void
  focus?: string | null
}

const Map: React.FC<IranType> = ({
  SVG,
  onHover,
  onSelect,
  focus,
  onLeave,
}) => {
  const onMouseOver = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    // @ts-ignore
    onHover(event.target.id)
  }

  const onClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    // @ts-ignore
    onSelect(event.target.id)
  }

  useEffect(() => {
    if (!focus) {
      return
    }

    const focused = document.querySelector("svg #" + focus)

    if (!focused) {
      return
    }

    focused.classList.add("highlight-province")

    return () => {
      focused.classList.remove("highlight-province")
    }
  }, [focus])

  return (
    <>
      <ReactTooltip />
      <SVG
        class="fill-current text-teal-500"
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onLeave}
      />
    </>
  )
}

export default Map
