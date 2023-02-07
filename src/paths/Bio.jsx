import '../assets/css/path.css';

function Bio () {
  let bioInfoArt = 
  "https://bandzoogle.com/blog/how-to-write-an-effective-musician-bio-with-examples";

  return (
    <div className=" path-cta bio">
    <h2 className="path-h2 bio">Bio</h2>
    <p className="path-p bio">
          <h2>How to write an effective musician bio </h2>
          <h4>Intro to Article on How to Write Music Bio</h4>
          One of the most important pages on your music website is your bio
          page. Let's face it - although you may be great at composing melodies
          and lyrics, it’s hard to write about yourself! This is not an easy
          thing to do, but it’s a really important way to make your band look
          professional. A great musician bio will create the first impression of
          you to many of your website visitors, so make it a good one. It will
          help convert your visitors into fans, as well as give bloggers and
          media a sense of who you are. Wondering what should be included in a
          musician bio.... Link below to writing a music` ` bio.
          <br />
          <br />
          <a href={bioInfoArt} alt="bioInfoArt">
            <p>Updated by Melanie Kealey on Feb 17, 2021 in: Website Tips </p>
          </a>
        </p>
    </div>
  );
}

export default Bio;