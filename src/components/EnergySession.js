import React from "react";
import { Container } from "react-bootstrap";
import "../styles/main.scss";
import { useTranslation } from "react-i18next";

export default function EnergySession() {
  const { t } = useTranslation();
  return (
    <section className="section-energy ">
      <Container className="content center">
        <h2>{t("what_healing_session")}</h2>
        <p
          style={{ textAlign: "center", maxWidth: "500px", marginTop: "30px" }}
        >
          {t("healing_session_description")}
        </p>
      </Container>
    </section>
  );
}
