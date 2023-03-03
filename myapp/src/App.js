import React from 'react'
import HeroContainer from './components/HeroContainer'
import Sidebar from './components/Sidebar'
import UserDetails from './components/UserDetails'

const App = () => {
  return (
    <div className="final">
    <Sidebar/>
    <HeroContainer/>
    <UserDetails/>
    </div>
  )
}

export default App
