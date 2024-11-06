import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Portfolio } from './Portfolio.tsx'

const router = createBrowserRouter([
  {
    path: "/minimalist-portfolio/",
    element: <App />,
  },
  {
    path: "/minimalist-portfolio/portfolio",
    element: <Portfolio />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
