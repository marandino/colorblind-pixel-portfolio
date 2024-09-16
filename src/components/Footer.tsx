import SocialMediaIcon from "./socialMediaLinks/SocialMediaIcon";
import SocialMediaSection from "./socialMediaLinks/SocialMediaSection";

export default function Footer() {
  return (
    <footer>
  <div className="footerHeaderRow">
    <p>Pixel artist and automation engineer</p>
    <img
      src="https://res.cloudinary.com/dkhpxyxnt/image/upload/c_thumb,w_35,g_face/v1726200029/zhoulogo_otm7rq.png" // Smaller logo
      alt="Menu Logo"
      className="logo"
    />
  </div>

      <div className="socialMediaLogos">
        <SocialMediaSection />
      </div>
      <div className="workMedia">
        <SocialMediaIcon
          socialMedia={"fa-github"} // Ensure the correct prefix
          URL={"https://github.com/ZhouZhengCarlos"}
        />
        <SocialMediaIcon
          socialMedia={"fa-linkedin"} // Ensure the correct prefix
          URL={"https://cr.linkedin.com/in/zhouzhengcarlos/en"}
        />
        <SocialMediaIcon
          socialMedia={"fa-discord"} // todo update cdn to 5 or upwards for discord icon
          URL={"https://discord.gg/yourdiscordserver"}
        />
      </div>
    </footer>
  );
}
