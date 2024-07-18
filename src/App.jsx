import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Home from './pages/Home'
import HotelLists from './hotel/HotelLists'
import SingleHotel from './hotel/SingleHotel'

function App() {

  const themeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route  path="/" element={< Layout />} >
      <Route index element={<Home />} />
      <Route path='/hotel-list' element={<HotelLists/>}/>
      <Route path='/single-list' element={<SingleHotel/>}/>
      </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={themeRoutes} />
    </>
  )
}

export default App
