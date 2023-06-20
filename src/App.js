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
import HuluSeries from "./pages/Hulu/HuluSeries";
import HuluTv from "./pages/Hulu/HuluTv";
import HuluDiscovery from "./pages/Hulu/HuluDiscovery";
import HuluComingsoon from "./pages/Hulu/HuluComingsoon";
import HbomaxSeries from "./pages/Hbomax/HbomaxSeries";
import HbomaxTv from "./pages/Hbomax/HbomaxTv";
import HbomaxComingsoon from "./pages/Hbomax/HbomaxComingsoon";
import HbomaxDiscovery from "./pages/Hbomax/HbomaxDiscovery";
import HbomaxCommunity from "./pages/Hbomax/HbomaxCommunity";
import DisneySeries from "./pages/Disney/DisneySeries";
import DisneyTv from "./pages/Disney/DisneyTv";
import DisneyDiscovery from "./pages/Disney/DisneyDiscovery";
import DisneyCommunity from "./pages/Disney/DisneyCommunity";
import DisneyComingsoon from "./pages/Disney/DisneyComingsoon";
import AppletvSeries from "./pages/AppleTv/AppletvSeries";
import AppletvTv from "./pages/AppleTv/AppletvTv";
import AppletvDiscovery from "./pages/AppleTv/AppletvDiscovery";
import AppletvCommunity from "./pages/AppleTv/AppletvCommunity";
import AppleTvComingSoon from "./pages/AppleTv/AppleTvComingSoon";

const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=08a143f47e4d4526636feab213f1dda2&page=1";

// const router2 = createBrowserRouter([
//   {
//     path: "home",
//     element: <Netflix />,
//   },
//   {
//     path: 'about',
//     element: <NetflixComingSoon/>,
//     children: [{
//       path: 'films',
//       element: <NetflixTv/>,
//       action: ()=> {fetch(
//         //API
//       )}
//     }]
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Options />,
        children: [
          {
            path: "",
            element: <Categories />,
            children: [
              {
                path: "",
                element: <Netflix />,
                loader: async () => {
                  try {
                    const response = await fetch(url);
                    const res = await response.json();
                    return res.results;
                  } catch (error) {
                    console.error(error);
                  }
                },
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
        path: "hulu",
        element: <Options />,
        children: [
          {
            path: "",
            element: <Categories />,
            children: [
              {
                path: "",
                element: <Hulu />,
              },
              {
                path: "series",
                element: <HuluSeries />,
              },
              {
                path: "tv-shows",
                element: <HuluTv />,
              },
            ],
          },
          {
            path: "discovery",
            element: <HuluDiscovery />,
          },
          {
            path: "coming-soon",
            element: <HuluComingsoon />,
          },
          {
            path: "community",
            element: <HuluComingsoon />,
          },
        ],
      },
      {
        path: "hbomax",
        element: <Options />,
        children: [
          {
            path: "",
            element: <Categories />,
            children: [
              {
                path: "",
                element: <Hbomax />,
              },
              {
                path: "series",
                element: <HbomaxSeries />,
              },
              {
                path: "tv-shows",
                element: <HbomaxTv />,
              },
            ],
          },
          {
            path: "coming-soon",
            element: <HbomaxComingsoon />,
          },
          {
            path: "discovery",
            element: <HbomaxDiscovery />,
          },
          {
            path: "community",
            element: <HbomaxCommunity />,
          },
        ],
      },
      {
        path: "/disney",
        element: <Options />,
        children: [
          {
            path: "",
            element: <Categories />,
            children: [
              {
                path: "",
                element: <Disney />,
              },
              {
                path: "series",
                element: <DisneySeries />,
              },
              {
                path: "tv-shows",
                element: <DisneyTv />,
              },
            ],
          },
          {
            path: "discovery",
            element: <DisneyDiscovery />,
          },
          {
            path: "community",
            element: <DisneyCommunity />,
          },
          {
            path: "coming-soon",
            element: <DisneyComingsoon />,
          },
        ],
      },
      {
        path: "/appletvplus",
        element: <Options />,
        children: [
          {
            path: "",
            element: <Categories />,
            children: [
              {
                path: "",
                element: <Appletv />,
              },
              {
                path: "series",
                element: <AppletvSeries />,
              },
              {
                path: "tv-shows",
                element: <AppletvTv />,
              },
            ],
          },
          {
            path: "discovery",
            element: <AppletvDiscovery />,
          },
          {
            path: "community",
            element: <AppletvCommunity />,
          },
          {
            path: "coming-soon",
            element: <AppleTvComingSoon />,
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
