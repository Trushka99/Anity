import React from "react";
import style from "./AnnousmentRow.module.scss";

const AnnousmentRow: React.FC<{
  repeatCount?: number;
  text: string;
  green?: boolean;
}> = ({ repeatCount = 5, text, green = false }) => {
  return (
    <div className={style.ticker}>
      {Array.from({ length: repeatCount }).map((_, index) => (
        <React.Fragment key={index}>
          <span className={style.ticker__text}>{text.toUpperCase()}</span>
          {index < repeatCount - 1 && (
            <span
              className={!green ? style.ticker__dot : style.ticker__dot_green}
            >
              •
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnnousmentRow;
