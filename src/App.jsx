import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portofolio from './components/Portofolio/Portofolio';
import Contact from './components/Contact/Contact';
import Layout from './components/layout/Layout';
import NotFound from './components/NotFound/NotFound';

function App() {
  
  const router= createBrowserRouter([

    {
      path:"",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/portfolio",
          element:<Portofolio/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"*",
          element:<NotFound/>
        }
      ]
    },
    

  ])

  return <RouterProvider router={router}/>
 
}

export default App
