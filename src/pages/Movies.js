import { useLoaderData } from "react-router-dom";
import "./Movies.scss";
import Movielist from "../components/Movielist";

const Movies = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="movies">
      <Movielist
        sectionName="Trending Movies"
        data={data.res}
        type="TRENDING"
      />
      <Movielist
        sectionName="Continue Watching"
        data={data.res_con}
        type="CONTINUE"
      />
      <Movielist sectionName="Top Rated" data={data.res_top} type="TOP_RATED" />
    </div>
  );
};

export default Movies;
