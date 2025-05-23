import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./index";
import PropTypes, { any } from "prop-types";

export const GifGrid = ({ category, gifs }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Loading...</h2>)
      }
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

GifGrid.defaultProps = {
  category: "Loading...",
};
