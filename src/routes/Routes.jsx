import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoutes";
import Addtoy from "../Pages/Addtoy/Addtoy";
import Alltoyspage from "../Pages/Alltoys/Alltoyspage";
import Mytoyspage from "../Pages/Mytoys/Mytoyspage";
import Mytoys from "../Pages/Mytoys/Mytoys";
import Updatetoy from "../Pages/Mytoys/Updatetoy";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/toydetails/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:  ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)
      },
      {
        path: "/addtoy",
        element: <PrivateRoute><Addtoy></Addtoy></PrivateRoute>
      },
      {
        path: "/alltoys",
        element: <Alltoyspage></Alltoyspage>
      },
      {
        path: "/mytoys/:email",
        element: <PrivateRoute><Mytoyspage></Mytoyspage></PrivateRoute>,
        loader:  ({params}) => fetch(`http://localhost:5000/mytoys/${params.email}`)
      },
      {
        path: "/updatetoy/:id",
        element: <PrivateRoute><Updatetoy></Updatetoy></PrivateRoute>,
        loader:  ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)
      }
    ]
  },
]);

export default router;