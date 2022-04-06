import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const PastDrops = () => {
  return (
    <div style={{ margin: "50px 0px" }}>
      <div className="PastDropsHeader">
        <div className="PastDropHeading">Past Drops</div>
        <Link className="PastDropsHeaderLink" to="/">
          See Drop Calendar{" "}
          <span
            style={{ display: "flex", width: "max-content", marginLeft: 10 }}
          >
            <BsArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PastDrops;
