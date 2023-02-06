import '../assets/css/path.css';
import ReactPlayer from 'react-player';


function Studio () {
  return (
    <div className="path-cta studio-cta">
        <h2 className="path-h2">Studio</h2>
        <ReactPlayer className="react-player" url='https://www.youtube.com/watch?v=27QbPhR0E7M'/>
        <ReactPlayer className="react-player" url='https://youtu.be/jP3Xs7WFPX0'/>
        <ReactPlayer className="react-player" url='https://www.youtube.com/watch?v=SgzV1FQvFmg'/>
        <ReactPlayer className="react-player" url='https://www.youtube.com/watch?v=BC9d-ebds4E'/>

    </div>
  );
}

export default Studio;
