import facebook from "../assets/icon/sticker/sticker_facebook.png";
import instagram from "../assets/icon/sticker/sticker_instagram.png";
import youTube from "../assets/icon/sticker/sticker_youtube.png";
import tikTok from "../assets/icon/sticker/sticker_tiktok.png";
import spotify from "../assets/icon/sticker/sticker_spotify.png";

function SocialMedia() {
  return (
    <div className="social-media-cta">

    {/* Facebook */}
      <a href="https://www.facebook.com/felicity.blaney.9?mibextid=ZbWKwL" target="_blank">
        {" "}
        <img className="social-media-icon" src={facebook} alt="FACEBOOK" />
      </a>

          {/* Instagram */}
      <a href="https://www.instagram.com/itsfelicityestelle/" target="_blank">
        {" "}
        <img className="social-media-icon" src={instagram} alt="INSTAGRAM" />
      </a>

    {/* YouTube */}
      <a href="https://youtube.com/@itsfelicityestelle" target="_blank">
      <img className="social-media-icon" src={youTube} alt="YOUTUBE" />
      </a>
      
    {/* TikTok */}
      <a href="https://www.tiktok.com/music/PC-7096449807597701122" target="_blank">
      <img className="social-media-icon" src={tikTok} alt="TIKTOK" />
      </a>

          {/* Spotify */}
      <a href="https://open.spotify.com/artist/5zTBOvOHk4AyiEqjzS9ZNx" target="_blank">
      <img className="social-media-icon" src={spotify} alt="SPOTIFY" />
      </a>
    </div>
  );
}

export default SocialMedia;
