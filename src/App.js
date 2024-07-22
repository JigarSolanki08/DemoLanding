import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/signup",
      element: <><Navbar/><SignUp/></>,
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
