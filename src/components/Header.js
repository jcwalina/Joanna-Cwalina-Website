import "../styles/header.scss";
import { useTranslation } from "react-i18next";
import Logo from "../imgs/logo.png";
import { Button } from "../ui/Buttons";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Globe } from "react-bootstrap-icons";
import Flag from "react-flagkit";

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown className="header-icon">
      <Dropdown.Toggle
        as="div"
        id="language-switcher"
        style={{ cursor: "pointer" }}
      >
        <Globe size={24} color="#C5B28F" />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: "60px" }}>
        <Dropdown.Item onClick={() => changeLanguage("en")}>
          <Flag country="GB" />
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage("de")}>
          <Flag country="DE" />
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage("pl")}>
          <Flag country="PL" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="Logo" className="header-logo" />
      </Link>

      <LanguageButton />

      <div className="header-content">
        <h1 className="header-title">Joanna Cwalina</h1>
        <h2 className="header-subtitle">{t("start_healing")}</h2>
        <Button
          link={t("link_consultation")}
          text={t("book_free_consultation")}
        />
      </div>
    </div>
  );
};
