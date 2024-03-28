import { NavLink } from "react-router-dom"

function Section({ title, more = false, children }) {
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
       {children}
    </section>
  )
}

export default Section
