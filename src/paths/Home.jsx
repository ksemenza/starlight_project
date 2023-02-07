import "../assets/css/path.css";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className="home-cta">
      <h2 className="home-h2">Welcome to my Queendom</h2>
      <ReactPlayer
        className="home-player"
        url="https://www.youtube.com/watch?v=HRDSvMyz3TU&t=3473s"
      />
    
    </div>
  );
}

export default Home;
