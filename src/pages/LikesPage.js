import React, { useContext } from "react";
import LikeContext from "../store/like-context";
import classes from "./LikesPage.module.css";
import { Button } from "@mui/material";

const LikesPage = () => {
  const likeCtx = useContext(LikeContext);

  const unlikeHandler = (url) => {
    likeCtx.onRemoveLikedImage(url);
  };

  const content =
    likeCtx.likedImages.length === 0 ? (
      <div style={{ textAlign: "center" }}>
        <p>No liked photos yet!</p>
      </div>
    ) : (
      <div className={classes["image-container"]}>
        {likeCtx.likedImages.map((image) => {
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
                <Button
                  onClick={() => unlikeHandler(image.urls.regular)}
                  variant="contained"
                  color="error"
                  size="small"
                  sx={{ height: "50%" }}
                >
                  Unlike
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    );

  return (
    <div>
      <div className={classes.header}>LIKED PHOTOS</div>
      {content}
    </div>
  );
};

export default LikesPage;
