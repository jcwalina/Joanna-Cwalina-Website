import React from "react";
import { InlineWidget } from "react-calendly";
import { Container } from "react-bootstrap";
import Star from "../imgs/star.png";
import { useTranslation } from "react-i18next";

export default function Calendly() {
  const { t } = useTranslation();
  return (
    <section style={{ padding: "20px 0" }} className="section" id="calender">
      <img
        src={Star}
        alt="star"
        style={{ height: "200px" }}
        className="symbol"
      />
      <Container className="content">
        <div className="calendly-container">
          <InlineWidget url={t("link_consultation")} />
        </div>
      </Container>
    </section>
  );
}
