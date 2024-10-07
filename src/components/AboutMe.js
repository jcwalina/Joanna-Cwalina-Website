import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me from "../imgs/me.jpg";
import Flower from "../imgs/lebens-blume.png";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section
      style={{ paddingTop: "10px" }}
      className="section center"
      id="about me "
    >
      <img src={Flower} alt="Joanna Cwalina" className="symbol-right" />
      <Container className="content">
        <Row>
          <Col md={6} className="center order-md-1 order-2 ">
            <img src={Me} alt="Joanna Cwalina" />
          </Col>
          <Col md={6} className="center order-md-2 order-1">
            <div>
              <h2>{t("about_me")}</h2>
              <p>{t("about_me_description")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
