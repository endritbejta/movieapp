import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Netflix from "./pages/Netflix";
import Hulu from "./pages/Hulu";
import Hbomax from "./pages/Hbomax";
import Disney from "./pages/Disney";
import Appletv from "./pages/Appletv";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Netflix />,
      },
      {
        path: "/hulu",
        element: <Hulu />,
      },
      {
        path: "/hbomax",
        element: <Hbomax />,
      },
      {
        path: "/disney",
        element: <Disney />,
      },
      {
        path: "appletvplus",
        element: <Appletv />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
