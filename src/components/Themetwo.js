import React from "react";
import Table from "./Table";
import Table2 from "./Table2";

const Themetwo = ({ header, data, styles, grid, type }) => {
  return (
    <div className={`container-fluid ${styles.theme}`}>
      <div className="row p-0">
        <div className="col p-0 header">
          <img alt="" className="" src={header} />
        </div>
      </div>
      <br />
      <div className="row my-5">
        <div className={`col-xl-11 col-lg-12 shadow mx-auto grid-${grid} p-0`}>
          <div className="text-white grid-label">Categories</div>
          <div className="text-white grid-label">1 Pack</div>
          {data
            ? data.map((item, index) => {
                return (
                  <Table2
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

export default Themetwo;
