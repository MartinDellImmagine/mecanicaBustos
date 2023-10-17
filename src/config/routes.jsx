import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";

import LayoutPrivate from "../Layouts/LayoutPrivate"
import LayoutPublic from "../Layouts/LayoutPublic";


import Repuestos from "../pages/Repuestos";
import Turnos from "../pages/Turnos";
import Login from "../pages/Login";

import Admin from "../pages/Admin"
import FinalizarCompra from "../pages/FinalizarCompra";


export const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <Notfound/>,
      element: <LayoutPublic />,
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path:'repuestos',
          element: <Repuestos />
        },
        {
          path:'turnos',
          element: <Turnos />
        },
        {
          path:'login',
          element: <Login />
        },
        {
          path:'comprar',
          element: <FinalizarCompra />
        },
        {
          path: "admin/",
          element: <LayoutPrivate />,
          children: [
              {
                  index: true,
                  element: <Admin />
              }
          ]
        }
      ]
    }

  ]);