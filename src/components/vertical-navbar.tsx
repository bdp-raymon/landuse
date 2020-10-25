import React from "react"
import debounce from "lodash/debounce"

type MenuItem = string | { value: string; children: Record<string, MenuItem> }

type VerticalNavbarType = {
  items: Record<string, MenuItem>
}

const VerticalNavbar: React.FC<VerticalNavbarType> = ({ items }) => {
  const removeCurrentlyAddedClasses = () => {
    document.querySelectorAll(".vertical-navbar a").forEach(a => {
      a.classList.remove("translate-r-2px", "font-bold")
    })
  }

  const getDomInViewport = (
    ids: Array<string>,
    vh: number
  ): string | undefined => {
    let target

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i]
      const element = document.querySelector("#" + id)

      if (element && element.getBoundingClientRect().top < vh / 3) {
        target = id
        if (i < ids.length - 1) {
          continue
        }
      }

      if (target) {
        const a = document.querySelector(`a[href="#${target}"]`)
        a?.classList.add("translate-r-2px", "font-bold")
      }

      return target
    }
  }

  const highlightMenuItem = (items: Record<string, MenuItem>, vh: number) => {
    const ids = Object.keys(items)

    const target = getDomInViewport(ids, vh)

    if (!target || typeof items[target] === "string") {
      return
    }

    // @ts-ignore
    highlightMenuItem(items[target]["children"], vh)
  }

  React.useEffect(() => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )

    const highlightMenu = () => {
      removeCurrentlyAddedClasses()
      highlightMenuItem(items, vh)
    }

    highlightMenu()

    const listener = debounce(highlightMenu, 1000)

    document.addEventListener("scroll", listener)

    return () => document.removeEventListener("scroll", listener)
  }, [items])

  const mapItemsToList = (items: Record<string, MenuItem>) => {
    return Object.keys(items).map(item => {
      const menu = items[item]
      if (typeof menu === "string") {
        return (
          <li
            key={item}
            className="hover:text-gray-800 hover:font-bold hover:translate-r-2px"
          >
            <a href={"#" + item}>{menu}</a>
          </li>
        )
      }

      return (
        <li key={item}>
          <a
            className="hover:text-gray-800 hover:font-bold hover:translate-r-2px"
            href={"#" + item}
          >
            {menu.value}
          </a>
          <ul className="space-y-4 pt-4 mr-4">
            {mapItemsToList(menu.children)}
          </ul>
        </li>
      )
    })
  }

  return (
    <nav className="vertical-navbar flex flex-col px-4 w-56">
      <div className="pt-8 sticky overflow-y-auto overflow-x-hidden top-0">
        <ul className="text-sm space-y-4 text-gray-600">
          {mapItemsToList(items)}
        </ul>
      </div>
    </nav>
  )
}

export default VerticalNavbar
