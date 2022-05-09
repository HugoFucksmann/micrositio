import PropTypes from "prop-types";
import Header from "../header/header";
import Landing from "../landing/landing";
import "./layout.css";

const Layout = (props) => {
  const { header, landing, footer } = props;
  return (
    <div>
      <div className="header">{header}</div>
      <div className="landing">{landing}</div>
      <div className="body">{props.children}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,
  landing: PropTypes.element,
};

Layout.defaultProps = {
  header: <Header />,
};

export default Layout;
