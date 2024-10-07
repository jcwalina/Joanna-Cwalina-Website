import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../ui/Buttons";
import "../styles/main.scss";
import Flower from "../imgs/lebens-blume.png";
import ProfileImg from "../imgs/light.jpg";
import { useTranslation } from "react-i18next";

export default function HealingSession() {
  const { t } = useTranslation();
  return (
    <section className="section center" id="healing-session">
      <img src={Flower} alt="Decorative Symbol" className="symbol-left" />
      <Container className="content">
        <Row>
          <Col md={6}>
            <h2>{t("energy_session_titel")}</h2>
            <p>
              {t("energy_session_description")}
              <br /> <br />
              <b>{t("energy_session_price")}</b> {t("energy_session_duration")}{" "}
              <br />
              <b>{t("energy_session_location")}</b> Online / Schifferstadt /
              Karlsruhe <p></p>
            </p>

            <Button link={t("link_session")} text={t("book_session_button")} />
          </Col>
          <Col md={6} className="center">
            <img src={ProfileImg} alt="Joanna Cwalina" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
