import React from "react";

import "./PersonalListPage.css";

import CardComponent from "../components/CardComponent";
import PaginationComponent from "../components/PaginationComponent";

function PersonalListPage() {
  return (
    <div className="list">
      <PaginationComponent
        RenderComponent={CardComponent}
        pageLimit={1}
        dataLimit={4}
      />
    </div>
  );
}

export default PersonalListPage;
