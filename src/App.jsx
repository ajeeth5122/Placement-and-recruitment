import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage"; 
import DataProvider from "./DataProvider";


const router = createBrowserRouter([
{
  path: '/',
  element: <LandingPage />,
}
])

function App() {
  return (
   <DataProvider>
    <RouterProvider router={router}/>
   </DataProvider>
  )
}

export default App
