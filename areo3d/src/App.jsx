import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {

  // menu toggle logic 
  const [menuStatus, setMenu] = useState(true);
  
    const menuToggle = ()=>{
  
      setMenu(prev=>(!prev))
      console.log(menuStatus)
    }

  // set up routes
  return (
    
    <BrowserRouter>
    
        <Routes>

              <Route path='/' element={<Home menuStatus={menuStatus} menuToggle={menuToggle} />}/>

        </Routes>
    
    
    
    </BrowserRouter>


  )
}

export default App
