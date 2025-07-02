import React, { useState } from "react";
import style from "./MainPage.module.scss";
import AnnousmentRow from "../../components/AnnousmentRow/AnnousmentRow";
import LatestNews from "../../components/LatestNews/LatestNews";
import Calendar from "../../components/Calendar/Calendar";
import Gallery from "../../components/Gallery/Gallery";
import Modal from "../../components/Modal/Modal";
const MainPage: React.FC<{
  images: string[];
}> = ({ images }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className={style.main}>
      <article className={style.main_cont}>
        <img
          className={style.main_img}
          src="https://comicbook.com/wp-content/uploads/sites/4/2024/12/Jujutsu-Kaisen-Season-3-Culling-Game-Poster.jpeg?w=724"
          alt="УЭЭЭ"
        />
        <div className={style.main_infocont}>
          <h2 className={style.main_infotitle}>Jujutsu Kaisen Season 3</h2>
          <div className={style.main_info}>
            <div>
              <h5>Published by</h5>
              <p>MAPPA</p>
            </div>
            <div>
              <h5>Nr. of episodes</h5>
              <p>?</p>
            </div>
            <div>
              <h5>Genre</h5>
              <p>Adventure</p>
            </div>
          </div>
          <button className={style.main_button}>Подробнее</button>
        </div>
      </article>
      <article className={style.main_row}>
        <div className={style.main_reviews}>
          <div className={style.main_reviews_title}>
            <p className={style.main_reviews_title_text}>Обзоры Аниме</p>
          </div>
          <div className={style.main_reviews_cont}>
            <h3>Саске - легендарный релокант</h3>
            <p
              style={{
                marginTop: "170px",
                maxHeight: "190px",
                overflow: "elipsis",
              }}
            >
              Вернется ли главный гей конохи обратно или его братско-инцесткие
              отношения поглатили бедного Саску. Наруто тренирует новые техники,
              Сакура готовится для нового цикла рыдания по ушедшему гею, а Саске
              разминает анал POGGERS
            </p>
          </div>
        </div>
        <div className={style.main_reviews}>
          <div
            className={`${style.main_reviews_title} ${style.main_reviews_title_yellow}`}
          >
            <p>Галерея</p>
          </div>
          <div className={style.main_reviews_cont}>
            <h3>
              SMT V - набираем демонов для обороны границ против русских орков
            </h3>
            <p
              style={{
                marginTop: "170px",
                textOverflow: "ellipsis",
              }}
            >
              Even though Shin Megami Tensei III: Nocturne HD Remix released
              just this past May, Atlus is priming to assault fans with another
              wave of demons with Shin Megami Tensei V, the next entry in the
              hallowed JRPG series coming this November 12th for the Nintendo
              Switch.
            </p>
          </div>
        </div>
        <div className={style.main_reviews}>
          <div
            className={`${style.main_reviews_title} ${style.main_reviews_title_purple}`}
          >
            <p>Обзоры Манги</p>
          </div>
          <div className={style.main_reviews_cont}>
            <h3>
              SMT V - набираем демонов для обороны границ против русских орков
            </h3>
            <p
              style={{
                marginTop: "170px",
                textOverflow: "ellipsis",
              }}
            >
              Even though Shin Megami Tensei III: Nocturne HD Remix released
              just this past May, Atlus is priming to assault fans with another
              wave of demons with Shin Megami Tensei V, the next entry in the
              hallowed JRPG series coming this November 12th for the Nintendo
              Switch.
            </p>
          </div>
        </div>
        <div className={style.main_reviews}>
          <div
            className={`${style.main_reviews_title} ${style.main_reviews_title_blue}`}
          >
            <p>Обзоры Игр</p>
          </div>
          <div className={style.main_reviews_cont}>
            <h3>
              SMT V - набираем демонов для обороны границ против русских орков
            </h3>
            <p
              style={{
                marginTop: "170px",
                textOverflow: "ellipsis",
              }}
            >
              Even though Shin Megami Tensei III: Nocturne HD Remix released
              just this past May, Atlus is priming to assault fans with another
              wave of demons with Shin Megami Tensei V, the next entry in the
              hallowed JRPG series coming this November 12th for the Nintendo
              Switch.
            </p>
          </div>
        </div>
      </article>
      <AnnousmentRow text={"LATEST NEWS"} />
      <LatestNews />
      <AnnousmentRow text={"SOON"} green={true} />
      <Calendar />
      <div className={style.main__center}>
        <button className={style.main__calendar_btn}>Больше Новостей</button>
      </div>
      <AnnousmentRow text={"Anime Gallery"} />
      <Gallery setActive={setModalActive} setImage={setSelectedImage} images={images} />
      <Modal
        setImage={setSelectedImage}
        img={images[selectedImage]}
        active={modalActive}
        setActive={setModalActive}
        images={images}
      />
    </main>
  );
};
export default MainPage;
