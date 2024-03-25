import Sidebar from "./components/Sidebar"
import Bottombar from "./components/Bottombar"
import Content from "./components/Content"

function App() {
  return (
    <>
      <div>
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </>
  )
}

export default App
