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
        path: "/netflix",
        element: <Netflix />,
        children: [
          {
            path: "/netflix/:genre",
            element: <h1>dd</h1>,
          },
        ],
      },
      {
        path: "/hulu",
        element: <Hulu />,
        children: [
          {
            path: "/hulu/:genre",
            element: <Hulu />,
          },
        ],
      },
      {
        path: "/hbomax",
        element: <Hbomax />,
        children: [
          {
            path: "/hbomax/:genre",
            element: <Hbomax />,
          },
        ],
      },
      {
        path: "/disney",
        element: <Disney />,
        children: [
          {
            path: "/disney/:genre",
            element: <Disney />,
          },
        ],
      },
      {
        path: "appletvplus",
        element: <Appletv />,
        children: [
          {
            path: "/appletvplus/:genre",
            element: <Appletv />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
