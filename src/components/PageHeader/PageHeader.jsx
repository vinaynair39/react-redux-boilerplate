/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Button } from "reactstrap"
import { Link } from "react-router-dom";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">React + Redux Boilerplate</h1>
            <h3 className="d-none d-sm-block">
              A Breathtaking Design using Bootstrap 4 and SCSS.
            </h3>
            <Link to="/register"><Button color="primary">Know More!</Button></Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
