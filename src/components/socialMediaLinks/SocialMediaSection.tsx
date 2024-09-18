import SocialMediaIcon from "./SocialMediaIcon";

export default function SocialMediaSection() {
  return (
    <div className="socialMediaLogos">
      <SocialMediaIcon
        socialMedia={"fa-facebook"}
        URL={"https://www.facebook.com/ZhouIsDrawing"}
        ariaLabel="Visit my Facebook page"
      />
      <SocialMediaIcon
        socialMedia={"fa-instagram"}
        URL={"https://www.instagram.com/colorblind_pixel/"}
        ariaLabel="Visit my Instagram profile"
      />
      <SocialMediaIcon
        socialMedia={"fa-twitter"}
        URL={"https://twitter.com/ColorblindPixl"}
        ariaLabel="Visit my Twitter profile"
      />
      <SocialMediaIcon
        socialMedia={"fa-whatsapp"}
        URL={"https://wa.me/c/50687492322"}
        ariaLabel="My whatsapp contact"
      />
      <SocialMediaIcon
        socialMedia={"fa-envelope"}
        URL={"mailto:colorblindpixelzhou@gmail.com"}
        ariaLabel="My email contact"
      />
    </div>
  );
}
