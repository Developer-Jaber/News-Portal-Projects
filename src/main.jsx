import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layouts from './Layouts/Layouts.jsx'
import Category from './components/Category/Category.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts></Layouts>,
    children: [
      {
        path: '',
        element: <Navigate to={"/category/01"}></Navigate>
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
