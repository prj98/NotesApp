import "./Header.css";
import Logo from "../Logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="logo" className="logo" />
        <span className="headertitle">PRJ Notes</span>
      </div>
      <hr />
    </>
  );
};

export default Header;
