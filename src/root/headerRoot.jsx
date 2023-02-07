import "../assets/css/header.css";
import NavBar from "../components/NavBar";

function headerRoot() {
  return (
    <div className="header-root-cta">
      <h1 className="header-h1">Felicity Estelle</h1>
      <div className="nav-cta">
        <NavBar />
      </div>
    </div>
  );
}

export default headerRoot;
