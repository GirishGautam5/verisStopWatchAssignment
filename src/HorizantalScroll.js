import React, { useEffect } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { useDispatch, useSelector } from "react-redux";
import { dataList } from "./actions/timerAction";
export default function HorizantalScroll() {
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.dataList);
  const {
    appData: { images = [] },
  } = imageData;
  useEffect(() => {
    dispatch(dataList());
  }, [dispatch]);
  const flickityOptions = {
    initialIndex: 2,
    freeScroll: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 2500,
    fullscreen: true,
    dragThreshold: 10,
    imagesLoaded: true,
    contain: true,
    adaptiveHeight: true,
    freeScrollFriction: 0.03,
  };
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {images.map((image) => (
        <img src={image.url} alt="image1" className="image-view" />
      ))}
    </Flickity>
  );
}
