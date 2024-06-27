
import { Routes } from 'react-router-dom'
import './App.css'
import indexpage from './pages/indexpage.jsx'




function App() {
 

  return (
    
    <>
  <Routes>
    <Route index element={<indexpage />} />
  </Routes>
      
    </>
  )
}

export default App
