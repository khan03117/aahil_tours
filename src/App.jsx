import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Home from './pages/Home'

function App() {

  const themeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route  path="/" element={< Layout />} >
      <Route index element={<Home />} />
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
