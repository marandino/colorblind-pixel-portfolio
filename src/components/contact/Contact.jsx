import { useState } from "react";
import "./contact.scss";
import SocialMediaIcon from "../socialMediaLinks/SocialMediaIcon";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="right">
        <h2>Contact me!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
          <h3><center>Contact me on Social Media!</center></h3>
          <div className="socialMedia">
            <SocialMediaIcon
              socialMedia={"fa-facebook"}
              URL={"https://www.facebook.com/ZhouIsDrawing"}
            />
            <SocialMediaIcon
              socialMedia={"fa-instagram"}
              URL={"https://www.instagram.com/colorblind_pixel/"}
            />
            <SocialMediaIcon
              socialMedia={"fa-twitter"}
              URL={"https://twitter.com/ColorblindPixl"}
            />
          </div>
        </form>
      </div>

      <div className="left">
        
      </div>
    </div>
  );
}
