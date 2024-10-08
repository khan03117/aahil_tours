import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Home from './pages/Home'
import HotelLists from './hotel/HotelLists'
import SingleHotel from './hotel/SingleHotel'
import SearchFlightsRes from './pages/SearchFlightResult/SearchFlightsRes'
import Review from './pages/Review'
import AddPassengerDetails from './pages/Review/AddPassengerDetails'
import PdfViewer from './ticket/PdfViewer'
import AgencyLayout from './airiq/layout/AgencyLayout'
import Login from './airiq/auth/Login'
import SearchPage from './airiq/pages/search/SearchPage'
import SearchResult from './airiq/pages/search/SearchResult'
import AgengyAuthLayout from './airiq/layout/AgengyAuthLayout'
import Dashboard from './airiq/pages/dashboard'
import Commission from './airiq/pages/commission/Commission'

function App() {

  const themeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={< Layout />} >
          <Route index element={<Home />} />
          <Route path='/hotel-list' element={<HotelLists />} />
          <Route path='/single-list' element={<SingleHotel />} />
          <Route path='/search-flight' element={<SearchFlightsRes />} />
          <Route path='/review/:id' element={<Review />} />
          <Route path='passenger-details/:id' element={<AddPassengerDetails />} />
          <Route path='/ticket/:id' element={<PdfViewer />} />
        </Route>
        <Route path='' element={<AgengyAuthLayout/>}>
            <Route path='/agency/login' element={<Login />} />
        </Route>
        <Route path='' element={<AgencyLayout />}>  
          <Route path='/dashboard' element={<Dashboard/>} />   
          <Route path='/commission' element={<Commission/>} />   
          <Route path='/agency/search' element={<SearchPage/>} />
          <Route path='/agency/search-result' element={<SearchResult/>} />
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
