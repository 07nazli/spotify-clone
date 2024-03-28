import { NavLink } from "react-router-dom"

function Section({ title, more = false, items }) {
  return (
    <section>
       <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight">{title}</h3>
        {more && (
            <NavLink className={"text-xs hover:underline font-semibold uppercase text-link"} to={more}>
                SEE ALL
            </NavLink>
        )}
       </header>
       <div className="grid grid-cols-5 gap-x-6">
        {items.map(item => (
          <NavLink 
            key={item.id} 
            to="/"
            className={"bg-footer p-4 rounded hover:bg-active"}
          >
            <div className="pt-[100%] relative mb-4">
              <img src={item.image} className="absolute inset-0 object-cover w-full h-full"/>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
              {item.description}
            </p>
          </NavLink>
        ))}
       </div>
    </section>
  )
}
export default Section
