import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
  return (
    <div>
      <div className="d-flex w-100" style={{height: "max-content"}}>
        <Sidebar />
        <main className="main-wrapper">
          <Navbar />
          <Main />
        </main>
      </div>
    </div>
  )
}

export default App