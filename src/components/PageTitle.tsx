import React from "react";
import { Link } from "react-router-dom";

const PageTitle = (props: any) => {
  return (
    <div className="page-top-info">
      <div className="container" style={{ marginTop: 100 }}>
        <h4>{props.title}</h4>
        <div className="site-pagination">
          <Link to="/"> Home /</Link>
        </div>
      </div>
    </div>
  );
};
export default PageTitle;
