import { Icon } from "../../icons"

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
        <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0 ">
            <Icon size={24} name="search" />
        </label>
      <input type="text" id="search-input" className="h-10 pl-12 outline-none text-black bg-white rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem] " placeholder="Artists Songs or Podcasts" />
    </div>
  )
}

export default Search
