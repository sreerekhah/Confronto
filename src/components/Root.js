import React from "react";
import { Link ,Outlet} from "react-router-dom";

const Root = () => {
  return (
    <div className="confronto-app">
        <h1>Confronto</h1>
        <div className="navigation">
          <Link className="strong" to={`/`}>Catalog</Link>
          <Link className="strong" to={`/compare`}>Compare</Link>
        </div>
        <Outlet/>
      </div>
  );
};

export default Root;


