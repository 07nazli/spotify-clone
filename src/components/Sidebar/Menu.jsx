import { Icon } from "../../icons"

function Menu() {
  return (
    <nav className="px-2 ">
        <ul className="flex flex-col">
            <li>
                <a href="#" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active">
                    <span>
                        <Icon name="home"/>
                    </span>
                    Home
                </a>
            </li>
            <li>
                <a href="#" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                    <span>
                        <Icon name="search"/>
                    </span>
                    Search
                </a>
            </li>
            <li>
                <a href="#" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                    <span>
                        <Icon name="collection"/>
                    </span>
                    Your Library
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Menu
