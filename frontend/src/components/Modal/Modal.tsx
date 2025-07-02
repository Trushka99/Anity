import React from "react";
import style from "./Modal.module.scss";

const Modal: React.FC<{
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
  images: string[];
  setImage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ active, setActive, img, images, setImage }) => {
  return active ? (
    <article onClick={() => setActive(false)} className={style.modal}>
      <img
        className={style.modal__img}
        src={img}
        alt="изображение в модальном окне"
        onClick={(e) => e.stopPropagation()}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={style.modal__gallery}
      >
        {images.map((el) => (
          <img
            onClick={() => setImage(images.indexOf(el))}
            className={style.modal__gallery_item}
            src={el}
            alt="sfs"
          />
        ))}
      </div>
    </article>
  ) : null;
};

export default Modal;
