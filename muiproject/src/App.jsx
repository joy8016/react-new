import Stack from "@mui/material/Stack"
import SearchAppBar from "./componenets/Navbar"
import Sidebar from "./componenets/SideBar"
import Feed from "./componenets/Feed"
import RightBar from "./componenets/RightBar"


function App() {



  return (
    <div >


    

      <SearchAppBar/>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Sidebar/>
        <Feed/>
        <RightBar/>

      </Stack>
      




    </div>
  )
}

export default App
