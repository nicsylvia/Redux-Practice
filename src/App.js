import React from 'react'
import LoginPage from './Components/LoginPage'
import ProfilePage from './Components/ProfilePage'

const App = () => {
  return (
    <div>
      <center style={{marginTop: "100px"}}>
        <LoginPage />
        <ProfilePage />
      </center>
    </div>
  )
}

export default App