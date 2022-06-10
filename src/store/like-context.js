import { createContext, useState } from "react";

const LikeContext = createContext({
  likedImages: [],
  onAddLikedImage: (image) => {},
  onRemoveLikedImage: (url) => {},
});

export const LikeContextProvider = (props) => {
  const [likedImages, setLikedImages] = useState([]);

  const addLikedImageHandler = (image) => {
    setLikedImages((prevState) => {
      return [...prevState, image];
    });
  };


  const removeLikedImageHandler = (url) => {
    setLikedImages((prevState) => {
      return prevState.filter((image) => {
        return url !== image.urls.regular;
      });
    });
  };

  return (
    <LikeContext.Provider
      value={{
        likedImages,
        onAddLikedImage: addLikedImageHandler,
        onRemoveLikedImage: removeLikedImageHandler,
      }}
    >
      {props.children}
    </LikeContext.Provider>
  );
};

export default LikeContext;
