import { useState } from "react";
import "./contact.scss";
import SocialMediaSection from "../socialMediaLinks/SocialMediaSection";


export default function Contact() {
  const [message, setMessage] = useState(false);

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  async function submitMessage() {
    console.log("We're not submitting anything, this is a placeholder.")
    console.log("Email: ", email);
    console.log("Text: ", text);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          <SocialMediaSection />
        </form>
      </div>
      {/* <div className="left">
        
      </div>*/}
    </div>
  );
}
