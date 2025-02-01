import { Outlet } from 'react-router-dom'
import './App.css'
import CookiesBanner from './components/CookiesBanner'
function App() {


  return (
    <div className='App min-h-screen w-full'>
    <CookiesBanner/>
    <Outlet/>
    </div>
  )
}

export default App
