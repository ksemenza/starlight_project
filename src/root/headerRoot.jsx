import "../assets/css/header.css";
import NavBar from "../components/NavBar";
import SocialMedia from "../components/SocialMedia";

function headerRoot() {
  return (
    <div className="header-root-cta">
      <h1 className="header-h1">Eloquent Star</h1>
      <div className="social-nav-cta">
        <NavBar />
        <SocialMedia />
      </div>
    </div>
  );
}

export default headerRoot;
