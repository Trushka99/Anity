import React, { useState } from "react";
import style from "./Calendar.module.scss";

const Calendar: React.FC = () => {
  const [data, setData] = useState([
    {
      date: "05.11",
      title: "Kimetsu no Yaiba: Yuukaku-hen",
      episode: "Эпизод 13",
      open: false,
      description:
        "La obra sigue las aventuras de Tanjirō Kamado, un adolescente cuya familia fue cruelmente asesinada por un Demonio el cual convirtió a su hermana Nezuko en una de estas criaturas, obligando a Tanjirō a emprender un viaje para cazar a estos seres y de paso ayudar a suhermana a recuperar su humanidad.",
    },
    {
      date: "12.11",
      title: "The Rising of the Shield Hero: Season 2",
      episode: "Эпизод 3",
      open: false,
      description:
        "Naofumi helps Raphtalia rebuild her village and is still busy helping Rishia with her training when unknown bat monsters suddenly attack the group. Soon, even greater dangers are brewing, for the countdown of the waves has unexpectedly stopped. Queen Mirelia suspects that these strange events are connected to the awakening of the extremely dangerous ghost turtle and is therefore forced to send Naofumi and his companions on a mission to put a stop to this approaching evil.",
    },
    {
      date: "21.11",
      title: "Attack on Titan: The Final Season Part 2",
      episode: "Эпизод 2",
      open: false,
      description:
        "Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny.",
    },
    {
      date: "02.12",
      title: "JoJo no Kimyou na Bouken Part 6: Stone Ocean",
      episode: "Эпизод 16",
      open: false,
      description:
        "A gift from her absent father grants Jolyne the power of Stone Free, a supernatural ability known as a Stand that allows her to unravel her body into string. Jolyne uses Stone Free to battle her way through the prison, recruiting new allies—Ermes Costello and Foo Fighters—to assist in her investigation. Together, the fearless women fight to uncover the menace behind Whitesnake, an enemy Stand responsible for the increasingly dangerous prisoners who are after Jolyne's life.",
    },
  ]);
  const toggleOpenByDescription = (desc: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.title === desc
          ? { ...item, open: item.open === false ? true : false }
          : item
      )
    );
  };
  return (
    <article className={style.calendar}>
      {data.map((el) => (
        <div className={style.calendar__column}>
          <div
            onClick={() => toggleOpenByDescription(el.title)}
            className={style.calendar__row}
          >
            <h3 className={style.calendar__title}>{el.date}</h3>
            <h4>{el.title}</h4>
            <p className={style.calendar__small}>{el.episode}</p>
          </div>
          <p
            className={`${style.calendar__desc} ${
              el.open ? style.calendar__desc_open : style.calendar__desc
            }`}
          >
            {el.description}
          </p>
        </div>
      ))}
    </article>
  );
};

export default Calendar;
