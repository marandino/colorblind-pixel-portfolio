import SocialMediaSection from "./socialMediaLinks/SocialMediaSection";

export default function Contact() {
  return (
    <section className="contact container" id="contact">
      <div className="contact-left">
        <h2>Contact me!</h2>
        <h3>
          <center>Contact me on Social Media!</center>
        </h3>
        <SocialMediaSection />
      </div>
      <div className="contact-right"></div>
    </section>
  );
}
