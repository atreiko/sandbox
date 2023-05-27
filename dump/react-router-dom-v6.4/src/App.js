import { 
  Route, 
  // Navigate, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import { BlogPage, blogLoader } from './pages/BlogPage'
import { SinglePostPage, postLoader } from './pages/SinglePostPage';
import NotFountPage from './pages/NotFountPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>

    <Route index element={<HomePage />} />
    <Route path='about' element={<AboutPage />}>
      <Route path='contacts' element={<p>Contacts</p>} />
      <Route path='team' element={<p>Team</p>} />
    </Route>
    <Route path='posts' element={<BlogPage />} loader={blogLoader} />
    <Route path='posts/:id' element={<SinglePostPage />} loader={postLoader} />
    <Route path='*' element={<NotFountPage />} />

  </Route>
))

const App = () => <RouterProvider router={router} />

export default App;
