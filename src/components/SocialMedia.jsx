import facebook from "../assets/icon/sticker/sticker_facebook.png";
import instagram from "../assets/icon/sticker/sticker_instagram.png";
import twitter from "../assets/icon/sticker/sticker_twitter.png";
import youTube from "../assets/icon/sticker/sticker_youtube.png";

function SocialMedia() {
  return (
    <div className="social-media-cta">
      <img className="social-media-icon" src={facebook} alt="FACEBOOK" />
      <img className="social-media-icon" src={instagram} alt="INSTAGRAM" />
      <img className="social-media-icon" src={twitter} alt="TWITTER" />
      <img className="social-media-icon" src={youTube} alt="YOUTUBE" />
    </div>
  );
}

export default SocialMedia;
