import Player from "./Bottombar/Player"

function Bottombar() {
    return (
      <div className="h-24 bg-footer border-t border-white border-opacity-5 fixed bottom-0 w-full right-0 left-0">
          <Player />   
      </div>
    )
  }
  export default Bottombar