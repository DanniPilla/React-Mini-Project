import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyThemeProvider from '../context/MyThemeContext'
// import AppRoutes from '../routes/AppRoutes'
import NavBar from '../components/NavBar'
import AppRoutes from '../routes/AppRoutes'

function App() {


  return (
    <>
      <MyThemeProvider>
        <NavBar/>
         
        <AppRoutes/>
     </MyThemeProvider>
    </>
  )
}

export default App
