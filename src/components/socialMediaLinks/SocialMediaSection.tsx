import SocialMediaIcon from "./SocialMediaIcon";

export default function SocialMediaSection() {
  return (
    <div className="socialMediaLogos">
      <SocialMediaIcon
        socialMedia="fa-facebook"
        URL="https://www.facebook.com/ZhouIsDrawing"
        ariaLabel="Visit my Facebook page"
      />
      <SocialMediaIcon
        socialMedia="fa-instagram"
        URL="https://www.instagram.com/colorblind_pixel/"
        ariaLabel="Visit my Instagram profile"
      />
      <SocialMediaIcon
        socialMedia="fa-twitter"
        URL="https://twitter.com/ColorblindPixl"
        ariaLabel="Visit my Twitter profile"
      />
    </div>
  );
}
