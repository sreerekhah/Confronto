import React from "react";

const Compare = () => {
  return (
    <div className="comparison-grid">
      <div className="feature-labels">
        <div></div>
        <div>Brand</div>
        <div>Model</div>
        <div>Rear Camera</div>
        <div>Front Camera</div>
        <div>Screen</div>
        <div>Storage</div>
        <div>OS</div>
        <div>Cost</div>
      </div>
      <div className="product-table">
        <div className="product-features">
          <div>
            <img src="" alt="" />
          </div>
          <div>Guava</div>
          <div>DumbPhone</div>
          <div>1MP</div>
          <div>2MP</div>
          <div>2inch Full HD</div>
          <div>2MB</div>
          <div>Windows CE</div>
          <div>$1.20</div>
          <div>
            <button>REMOVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
