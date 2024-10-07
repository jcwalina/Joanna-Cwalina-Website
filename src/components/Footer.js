import React from "react";
import "../styles/footer.scss";
import Logo from "../imgs/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer pt-5">
      <div className="container ">
        <Row className="px-5 ">
          <div className="col-md-6 contact-info">
            <h2 style={{ fontSize: "20px", textAlign: "left" }}>
              {t("contact")}
            </h2>
            <ul style={{ zIndex: "5" }} className="list-unstyled">
              <li>
                <i className="bi bi-envelope-fill"></i> joannacwalinaa@gmail.com
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i> +49 1577 2195452
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i> 67105 Schifferstadt
              </li>
              <li>
                <i className="bi bi-instagram"></i>
                <Link
                  to="https://www.instagram.com/joanna_cwalina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  joanna_cwalina
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 booking-link">
            <p>{t("footer_contact_me")}</p>
            <Link
              to={t("link_session")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ zIndex: "11" }} className="bi bi-calendar"></i>
              {t("calendar_link")}
            </Link>
          </div>
        </Row>
        <Row className="justify-content-center">
          <div className="col logo-footer"></div>
          <div
            style={{ zIndex: "5" }}
            className="col-md-7 d-flex flex-column justify-content-end align-items-center footer-credits"
          >
            <p className="d-flex flex-nowrap">
              Copyright &copy; 2024 Joanna Cwalina |
              <Link to="/impressum"> {t("imprint")}</Link> |
              <Link to="/datenschutzerklaerung"> {t("privacy_policy")}</Link>
            </p>
            <p>
              Created with <span className="heart">❤️</span> by
              <Link
                to="https://www.linkedin.com/in/joanna-cwalina/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Joanna Cwalina
              </Link>
            </p>
          </div>

          <div className="col d-flex flex-row text-nowrap justify-content-end center logo-footer">
            <img src={Logo} alt="Logo" className="footer-logo" />
            <h2
              style={{
                color: "black",
                fontSize: "11px",
                letterSpacing: "5px",
                margin: "0",
                lineHeight: "inherit",
                fontWeight: "600",
              }}
            >
              JOANNA
              <br />
              CWALINA
            </h2>
          </div>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
