import React, { useEffect } from "react";

// core components
import PublicNavbar from "components/Navbars/PublicNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";


const Index = (props) => {
  return (
    <div className="index-page">
      <PublicNavbar />
      <div className="wrapper animated fadeIn">
        <PageHeader />
      </div>
    </div>
  );
}

export default Index;
