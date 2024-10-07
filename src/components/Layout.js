import React from "react";
import Footer from "./Footer";
import "../styles/footer.scss";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const contentStyle = {
  flex: 1,
};

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <div style={contentStyle}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
