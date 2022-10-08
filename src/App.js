import React from 'react'
import { router } from './routes/routes'
import {RouterProvider} from 'react-router-dom';

function App() {
  return <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
}

export default App
