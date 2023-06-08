import { useState } from "react";
import "./contact.scss";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import SocialMediaIcon from "../socialMediaLinks/SocialMediaIcon";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  async function submitMessage() {
    const collectionRef = collection(db, "Messages");
    try {
      await addDoc(collectionRef, {
        Message: text,
        Email: email,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitMessage();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="right">
        <h2>Contact me!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            required
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
          <h3>
            <center>Contact me on Social Media!</center>
          </h3>
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
      {/* <div className="left">
        
      </div>*/}
    </div>
  );
}
