import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/main.scss";
import Flower from "../imgs/lebens-blume.png";
import Women from "../imgs/frau.jpg";

export default function Services() {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true }) || [];
  return (
    <section className="section" id="services">
      <img src={Flower} alt="Decorative Symbol" className="symbol" />
      <Container className="content">
        <Row>
          <Col md={6} className="center">
            <h2 style={{ textAlign: "center" }}>{t("services_title")}</h2>
            <ul>
              {Array.isArray(services) && services.length > 0 ? (
                services.map((service, index) => <li key={index}>{service}</li>)
              ) : (
                <li></li>
              )}
            </ul>
            <h2 className="h2-2">{t("services_subtitle")}</h2>
          </Col>
          <Col md={6} className="center">
            <img src={Women} alt="Healing" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
