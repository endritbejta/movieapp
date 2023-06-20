import Card3 from "../../UI/Card3/Card3";
import { useLoaderData } from "react-router-dom";
import "./pages.scss";

const Netflix = (props) => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="netflix">
      <div className="trending">
        <p>Trending movies</p>
        <a href="#">See all &gt;</a>
      </div>
      <div className="movies">
        {data.map((movie) => {
          return <Card3 movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default Netflix;
