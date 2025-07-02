import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>
        <span className={style.header_coloryellow}>A</span>NITY
      </h1>
      <ul className={style.header__list}>
        <li className={style.header__li}>
          <Link className={style.header__li} to={"/"}>
            Главная
          </Link>
        </li>
        <li className={style.header__li}>Инфо</li>
        <li className={style.header__li}>Галерея</li>
        <li className={style.header__li}>Манга</li>
        <li className={style.header__li}>
          <Link className={style.header__li} to={"games"}>
            Игры
          </Link>
        </li>
        <li className={style.header__li}>Аниме</li>
      </ul>
    </header>
  );
};
export default Header;
