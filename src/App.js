import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Netflix from "./pages/Netflix/Netflix";
import Hulu from "./pages/Hulu/Hulu";
import Hbomax from "./pages/Hbomax/Hbomax";
import Disney from "./pages/Disney/Disney";
import Appletv from "./pages/AppleTv/Appletv";
import Error from "./pages/Error";
import Options from "./components/Options";
import Categories from "./components/categories";
import NetflixTv from "./pages/Netflix/NetflixTv";
import NetflixSeries from "./pages/Netflix/NetflixSeries";
import NetflixDiscovery from "./pages/Netflix/NetflixDiscovery";
import NetflixCommunity from "./pages/Netflix/NetflixCommunity";
import NetflixComingSoon from "./pages/Netflix/NetflixComingSoon";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "netflix",
        element: <Options />,
        children: [
          {
            path: "home",
            element: <Categories />,
            children: [
              {
                path: "movies",
                element: <Netflix />,
              },
              {
                path: "series",
                element: <NetflixSeries />,
              },
              {
                path: "tv-shows",
                element: <NetflixTv />,
              },
            ],
          },
          {
            path: "discovery",
            element: <NetflixDiscovery />,
          },
          {
            path: "community",
            element: <NetflixCommunity />,
          },
          {
            path: "coming-soon",
            element: <NetflixComingSoon />,
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
        path: "/appletvplus",
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
