
import './App.css'

import Buttons from './components/Buttons'
import UploadFiles from './components/UploadFIles'
import ComboBox from './components/ComboBox'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'


function App() {

  const theme = createTheme({
    palette: {
      mode: 'light'
    },
  })


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>


        <Buttons />
        <UploadFiles />
        <ComboBox />
      </ThemeProvider>
    </>
  )
}

export default App
