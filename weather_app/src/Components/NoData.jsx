import React from "react";

const NoData = () => {
  return (
    <>
      <div className="container">
        <div className="city">
          <i class="fas fa-plane"></i>
          <h1 style={{ textAlign: "center", marginTop: "2%" }}>
            Location is not found
          </h1>
        </div>
      </div>
    </>
  );
};

export default NoData;
