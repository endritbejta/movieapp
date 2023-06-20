import Card3 from "../../UI/Card3/Card3";
import { useLoaderData } from "react-router-dom";
import "./pages.scss";
import ContinueCard from "../../UI/Card3/ContinueCard";

const Netflix = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="netflix">
      <div className="trending">
        <p>Trending movies</p>
        <a href="#">See all &gt;</a>
      </div>
      <div className="movies">
        {data.res.results.map((movie) => {
          return <Card3 movie={movie} key={movie.id} />;
        })}
      </div>
      <div className="continue">
        <p>Continue watching</p>
        <div className="films">
          {data.res_con?.results?.slice(0, 8).map((movie) => {
            return <ContinueCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Netflix;
