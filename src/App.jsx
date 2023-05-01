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
import ProjectsPage from './routes/ProjectsRoute/ProjectsPage';
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<IntroNav />} >
      <Route index element={<Projects />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/projects' element={<ProjectsPage />} />
    </Route>

  )
)
function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
