import React from "react";
import style from "./LNitem.module.scss";
type Tln = {
  img: string;
  date: string;
  text: string;
  title: string;
  classname: string;
  imgClass: string;
};
const LNitem: React.FC<Tln> = ({
  img,
  date,
  text,
  title,
  classname,
  imgClass,
}) => {
  return (
    <article className={`${style.item} ${classname}`}>
      <h3 className={style.item__date}>{date}</h3>
      <div className={style.item__container}>
        <img
          className={`${style.item__img} ${imgClass}`}
          src={img}
          alt="изображение новости"
        />
      </div>
      <h4 className={style.item__title}>{title}</h4>
      <p className={style.item__text}>{text}</p>
    </article>
  );
};
export default LNitem;
