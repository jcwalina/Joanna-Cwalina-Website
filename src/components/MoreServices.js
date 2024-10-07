import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hand from "../imgs/handStones.png";
import { useTranslation } from "react-i18next";

export default function MoreServices() {
  const { t } = useTranslation();
  const services = t("other_services_list", { returnObjects: true }) || [];
  return (
    <section className="section center more-services" id="moreServices">
      <Container className="content  ">
        <Row>
          <Col md={6}>
            <div className="content">
              <h2>{t("additional_offers")}</h2>
              <ul>
                {Array.isArray(services) && services.length > 0 ? (
                  services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))
                ) : (
                  <li></li>
                )}
              </ul>
              <div className="pt-3">
                <p>
                  <strong> {t("pricing.coaching")}</strong>{" "}
                  {t("pricing.coachingPrice")}
                </p>
                <p style={{ marginBottom: "0" }}>
                  <strong>{t("pricing.clearing")}</strong>{" "}
                  {t("pricing.clearingPrice")}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className=" center">
            <img src={Hand} alt="Chakra Healing" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
