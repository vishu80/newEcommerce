import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  let emptyArray = new Array(10);
  console.log(emptyArray);
  return (
    <>
    <div style={{display:"flex",flexWrap:'wrap' }}>
      {emptyArray?.fill(0)?.map((item, index) => (
        <div className="bodyContainer" key={index}>
          <div className="bodyContainerBoxShimmer"></div>
        </div>
      ))}
      </div>
    </>
  );
};
export default Shimmer;
