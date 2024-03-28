import { Routes, Route } from 'react-router-dom';
import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"

function Navbar() {
    return (
      <nav className="h-[3.75rem] flex items-center justify-between px-8 ">
          <Navigation />
          <Routes>
            <Route exact="true" path="/" /*element="home" */ />
            <Route path='/search' /*element="search"*/ />
            <Route path='/collection' /*element="collection"*/ />
          </ Routes>
          <Auth /> 
      </nav>
    )
  }
  export default Navbar 