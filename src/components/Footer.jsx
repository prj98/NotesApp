import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <span className="footertext">
        Copyright &copy; {year} &nbsp; --- &nbsp;Made by Pushpraj Kumar.
      </span>
    </div>
  );
};

export default Footer;
