import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

export default function Quote() {
  const { t } = useTranslation();
  return (
    <section className="section-quote" style={{ height: "50vh" }}>
      <Container className="content center h-100">
        <h2 style={{ color: "#ffffffa1", fontStyle: "italic" }}>
          {t("quote")}
        </h2>
      </Container>
    </section>
  );
}
