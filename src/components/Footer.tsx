import SocialMediaIcon from "./socialMediaLinks/SocialMediaIcon";
import SocialMediaSection from "./socialMediaLinks/SocialMediaSection";

export default function Footer() {
  return (
    <footer>
      <h3>Colorblind Pixel</h3>
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
