import { Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Home from '../views/Home'
import Search from '../views/Search'
import Collection from '../views/Collection'

function Content() {
    return (
      <main className="flex-auto">
        <Navbar />
          <div className='px-8 pt-5 '>
            <Routes>
              <Route exact="true" path="/" element={<Home />} />
              <Route path='/search' element={<Search />} />
              <Route path='/collection' element={<Collection />} />
            </Routes>
          </div>
      </main>
    )
  }
  export default Content