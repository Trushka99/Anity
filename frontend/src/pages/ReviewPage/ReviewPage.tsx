import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getGameById } from "../../api";
import style from "./ReviewPage.module.scss";
type Treview = {
  img: string;
  title: string;
  description: string;
  fulldescription: string;
  _id: string;
};
function ReviewPage() {
  const { id } = useParams();
  const [review, setReview] = useState<Treview | null>(null);

  useEffect(() => {
    getGameById(id)
      .then((res) => setReview(res))
      .catch((err) => console.log(err));
  }, []);
  if (!review) return <div>Обзор не найден</div>;

  return (
    <article className={style.reviewPage}>
      <div className={style.reviewPage__cont}>
        <img
          className={style.reviewPage__img}
          src={review.img}
          alt={review.title}
        />
        <h1 className={style.reviewPage__title}>{review.title}</h1>
        <p className={style.reviewPage__desc}>{review.description}</p>{" "}
        <p className={style.reviewPage__fullDesc}>{review.fulldescription}</p>
      </div>
    </article>
  );
}
export default ReviewPage;
