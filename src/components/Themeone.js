import React from "react";
import Table from "./Table";

const Themeone = ({ header, data, styles, grid, type }) => {
  return (
    <div className={`container-fluid ${styles.theme}`}>
      <div className="row p-0">
        <div className="col p-0 header">
          <img alt="" className="" src={header} />
        </div>
      </div>
      <br />
      <div className="row my-5">
        <div
          className={`col-xl-11 col-lg-12 shadow mx-auto card-bg grid-${grid} p-0`}
        >
          {data
            ? data.map((item, index) => {
                return (
                  <Table
                    img={item.img}
                    des={item.des}
                    text={item.text}
                    index={index}
                    styles={styles}
                    gridtype={grid}
                    key={index}
                  />
                );
              })
            : ""}
        </div>
        <br />
        <div
          className={`col-xl-11 col-lg-12 mx-auto shadow my-4 p-3 text-center display-6 ${styles.text}`}
        >
          WARNING: Quitting smoking now greatly reduces serious risks to your
          health
        </div>
      </div>
    </div>
  );
};

export default Themeone;
