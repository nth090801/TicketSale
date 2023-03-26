import React from "react";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import styles from "./CheckTicket.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
const CheckTicket = () => {
  return (
    <Container fluid className={cx("wrap_CheckTicket")}>
      <Header />
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckTicket;
