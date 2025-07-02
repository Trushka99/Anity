import React from "react";
import style from "./Gallery.module.scss";
const Gallery: React.FC<{
  images: string[];
  setImage: React.Dispatch<React.SetStateAction<number>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ images, setImage, setActive }) => {
  return (
    <article className={style.gallery}>
      {images.map((el, index) => (
        <div key={index} className={style.gallery__container}>
          <div className={style.gallery__imgWrapper}>
            <img className={style.gallery__img} src={el} alt="ПОПЛАКАЙ" />
            <div
              onClick={() => {
                setImage(index);
                setActive(true);
              }}
              className={style.gallery__overlay}
            >
              <div className={style.gallery__circle}>
                <p className={style.gallery__plus}>+</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};
export default Gallery;
