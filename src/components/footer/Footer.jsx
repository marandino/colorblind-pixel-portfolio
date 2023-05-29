import "./footer.scss"
import SocialMediaIcon from "../socialMediaLinks/SocialMediaIcon";
export default function Footer() {
  return (
    <footer>
    
    <h3> Colorblind Pixel </h3>
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
    </footer>
  )
}
