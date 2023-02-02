import React from "react";

const Table2 = ({ img, text, des, index, styles, gridtype, themetype }) => {
  return (
    <React.Fragment key={index}>
      <div className="grid-item">
        <div>
          <img src={img} className={"img"} alt="" />
        </div>
      </div>
      <div className="grid-item">
        <h1 className={`price ${styles.text}`}>{text}</h1>
      </div>
      {gridtype === 3 ? (
        <div className="grid-item px-4">
          <p className={`des ${styles.text}`}>{des}</p>
        </div>
      ) : (
        ""
      )}
      {gridtype === 4 ? (
        <div className="grid-item px-4">
          <p className={`des ${styles.text}`}>{des}</p>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Table2;
