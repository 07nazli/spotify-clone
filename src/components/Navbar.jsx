import { Routes, Route, useMatch } from 'react-router-dom';
import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"
import Search from './Navbar/Search';

function Navbar() {

  const searchRoute = useMatch('/search')

    return (
      <nav className="h-[3.75rem] flex items-center justify-between px-8 ">
          <Navigation />

          {searchRoute && <Search />}

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