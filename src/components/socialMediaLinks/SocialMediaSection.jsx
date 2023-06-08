import SocialMediaIcon from "./SocialMediaIcon";
export default function SocialMediaSection() {
  return (
    <div className="socialMediaLogos">
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
  );
}