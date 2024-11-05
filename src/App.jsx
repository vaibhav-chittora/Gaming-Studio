import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')
  return (

    <ThemeContext.Provider value={{theme, setTheme}}>

    <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null } h-[100vh] `}>

      <Header />
      <Home />
    </div>
    </ThemeContext.Provider>

  )
}

export default App
