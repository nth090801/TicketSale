import React from "react";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import styles from "./ServicePack.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const ServicePack = () => {
  return (
    <Container fluid className={cx("wrap_servicePack")}>
      <Header />
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
      </Row>
    </Container>
  );
};

export default ServicePack;
