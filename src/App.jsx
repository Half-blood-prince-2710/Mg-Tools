import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HtZustand from './ht-zustand/HtZustand' 
import Home from './Home'
import Applayout from './layout/Applayout'
import ReduxHome from './redux-toolkit/ReduxHome'
import HtRedux from './redux-toolkit/ht-redux/HtRedux'



const router = createBrowserRouter([
  {

    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "/htzustand",
        element: <HtZustand />,
      },
      {
        path: "/redux",
        element: <ReduxHome />,
        children: [{
          path: "/redux/htredux",
          element: <HtRedux />
        }]
      },
    ]
  },
])
function App() {
 

  return (
    <RouterProvider router={router} />
  )
}

export default App
