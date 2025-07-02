import React from "react";
import style from "./LatestNews.module.scss";
import LNitem from "./LNitem/LNitem";
const mockNews = [
  {
    img: "https://xlm.ru/storage/uploads/products/12449/2024/10/21/m3bbjIToV4bXJ24N4HxOx38LNR6SNxinmbJGIjIV.jpeg",
    date: "18.03.2025",
    text: "Вышла новая глава берсерк, местный Милонов уже четвертовал множество людей, а Каску СНОВА СОБИРАЮТСЯ НАСИЛОВАТЬ, но на этот раз с огоньком",
    title: "XL издала новый том вечной гомо классики",
    classname: style.vertical,
    imgClass: style.verticalImage,
  },
  {
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/bg_about_pc.jpg",
    date: "18.03.2025",
    text: "Вышел трейлер новой Аниме про отбросов (нет, твоих родителей там не будет",
    title: "Gachiukata, новый трейлер",
    classname: style.horizontal,
    imgClass: style.horizontalImage,
  },
  {
    img: "https://assets-prd.ignimgs.com/2025/01/11/sakamato-blogroll-1736557600310.jpg",
    date: "18.03.2025",
    text: "Лучший скуф продолжает унижать японское население, а мы и рады. Хиросими явно было недостаточно",
    title: "От такого похудения дуреют все твитерские",
    classname: style.horizontal2,
    imgClass: style.horizontalImage,
  },
];
const LatestNews: React.FC = () => {
  return (
    <article className={style.grid}>
      {mockNews.map((item) => (
        <LNitem {...item} />
      ))}
    </article>
  );
};

export default LatestNews;
