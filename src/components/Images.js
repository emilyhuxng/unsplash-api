import React, { useContext, useEffect, useState } from "react";
import classes from "./Images.module.css";

import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import LikeContext from "../store/like-context";
import QueryContext from "../store/query-context";

// require('dotenv').config();
const CLIENT_ID = process.env.REACT_APP_API_KEY;

const Images = () => {
  const [images, setImages] = useState([]);
  const likeCtx = useContext(LikeContext);
  const { query, color } = useContext(QueryContext);

  useEffect(() => {
    const getImage = async function () {
      let url =
        "https://api.unsplash.com/search/photos?per_page=12&client_id=" +
        CLIENT_ID;
      if (query) {
        url += "&query=" + query;
      }
      if (color) {
        url += "&color=" + color;
      }
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      //console.log(data.results[0].urls.regular);
      setImages(data.results);
    };
    getImage();
  }, [query, color]);

  const likeHandler = (image) => {
    if (
      likeCtx.likedImages.some((img) => {
        return img.urls.regular === image.urls.regular;
      })
    ) {
      likeCtx.onRemoveLikedImage(image.urls.regular);
    } else {
      likeCtx.onAddLikedImage(image);
    }
  };

  const content =
    images.length === 0 ? (
      <div style={{ textAlign: "center" }}>
        <p>No photos found.</p>
      </div>
    ) : (
      <div className={classes["image-container"]}>
        {images.map((image) => {
          return (
            <div key={image.urls.regular} className={classes.item}>
              <a
                className={classes.a}
                href={image.links.html}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.image}
                  src={image.urls.regular}
                  alt={image.description}
                />
              </a>
              <div className={classes["like-bar"]}>
                <button
                  onClick={() => likeHandler(image)}
                  className={classes.button}
                >
                  {likeCtx.likedImages.some((img) => {
                    return img.urls.regular === image.urls.regular;
                  }) ? (
                    <BsSuitHeartFill size={20} />
                  ) : (
                    <BsSuitHeart size={20} />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );

  return content;
};

export default Images;
