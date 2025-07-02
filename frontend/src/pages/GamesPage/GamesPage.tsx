import React, { useState, useEffect } from "react";
import styles from "./GamesPage.module.scss";
import { Link } from "react-router";
import { getGames, uploadImage, getImages } from "../../api";
type post = {
  img: string;
  title: string;
  description: string;
  fulldescription: string;
  _id: string;
};
const GamesPage: React.FC = () => {
  const [posts, setPosts] = useState<post[]>([]);
  const [images, setImg] = useState(null);
  console.log(images);
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    getImages()
      .then((res) => {
        setImg(res[0].gameImage);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getGames()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const [active, setActive] = useState(false);
  return (
    <main className={styles.games}>
      <img
        className={styles.games__img}
        src={`http://localhost:3001${images}`}
        alt="картинка для даунов"
        onClick={() => setActive(true)}
      />
      <div className={styles.games__text}>
        <div className={styles.games__breadcrumbs}>
          <p>Главная</p>
          <p>|</p>
          <p> Игры</p>
        </div>
        <h3 className={styles.games__title}>Последние вышедшие обзоры</h3>
      </div>
      <article className={styles.games__reviews}>
        {posts.map((el) => (
          <div className={styles.games__review}>
            <img
              src={el.img}
              alt="обложка"
              className={styles.games__review_img}
            />
            <div className={styles.games__review_text}>
              <h4 className={styles.games__review_title}>{el.title}</h4>
              <p>{el.description}</p>
              <Link to={`/games/${el._id}`} className={styles.games__link}>
                <button className={styles.games__button}>Подробнее</button>
              </Link>
            </div>
          </div>
        ))}
      </article>
      {active ? (
        <article
          onClick={() => setActive(false)}
          className={styles.games__modal}
        >
          <div className={styles.games__inputCont}>
            <input
              className={styles.games__input}
              value={file ? file.name : "выберите файл"}
              onClick={(e) => e.stopPropagation()}
            />
            <input
              key={active.toString()}
              type="file"
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  const selectedFile = files[0];
                  console.log("✅ Выбран файл:", selectedFile.name);
                  setFile(selectedFile);
                } else {
                  console.log("❌ Файл не выбран");
                }
              }}
            />
          </div>
          <button
            onClick={() => {
              const formData = new FormData();
              if (file) {
                formData.append("image", file);
                uploadImage(formData).then((res) => console.log(res));
              }
            }}
          >
            применить
          </button>
        </article>
      ) : null}
    </main>
  );
};
export default GamesPage;
