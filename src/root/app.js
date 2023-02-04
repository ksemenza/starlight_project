
import '../assets/css/app.css';
import {Route, Routes } from 'react-router-dom'
import PinkImg from '../assets/img/pink_crouch.jpg'

function app() {
  return (
    <div  className="app-cta"
          style={{
          backgroundImage: `url(${PinkImg})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
    >

    </div>
  );
}

export default app;
