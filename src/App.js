import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";

import Layout from "./Layout/Layout";
import Error from "./pages/Error";
import Options from "./components/Options";
import Categories from "./components/categories";
import NetflixTv from "./pages/Netflix/NetflixTv";
import NetflixSeries from "./pages/Netflix/NetflixSeries";
import NetflixDiscovery from "./pages/Netflix/NetflixDiscovery";
import NetflixCommunity from "./pages/Netflix/NetflixCommunity";
import NetflixComingSoon from "./pages/Netflix/NetflixComingSoon";
import Movies from "./pages/Movies";

const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14f2683b398dd16f58513bdf174ac5b1&page=1";

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
                element: <Movies />,
                loader: async () => {
                  try {
                    const response = await fetch(url);
                    const res = await response.json();

                    const options = {
                      method: "GET",
                      headers: {
                        accept: "application/json",
                        Authorization:
                          "Bearer 14f2683b398dd16f58513bdf174ac5b1",
                      },
                    };

                    const response2 = await fetch(
                      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&api_key=14f2683b398dd16f58513bdf174ac5b1&page=1"
                    );
                    const res_con = await response2.json();

                    const response3 = await fetch(
                      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=500&api_key=14f2683b398dd16f58513bdf174ac5b1&page=1"
                    );
                    const res_top = await response3.json();

                    return { res, res_con, res_top };
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
