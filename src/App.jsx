import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoard'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<DashBoard/>}/>
    {/* <Route path='/account' element={<route/>}/> */}
    {/* <Route path='/menu' element={<eoute/>}/> */}
    </Routes>
    </>
  )
}

export default App
