import './App.css'
import IntroNav from './components/IntroNav/IntroNav'
import Articles from './components/Articles/Articles'
import Projects from './components/Projects/Projects'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<IntroNav />} >
      <Route index element={<Projects />} />
      <Route path='/articles' element={<Articles />} />
    </Route>

  )
)
function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
