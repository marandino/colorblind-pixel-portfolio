import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaSection() {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com/ZhouIsDrawing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Facebook page"
      >
        <FontAwesomeIcon size="xl" icon={faFacebook} />
      </a>
      <a
        href="https://www.instagram.com/colorblind_pixel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Instagram profile"
      >
        <FontAwesomeIcon size="xl" icon={faInstagram} />
      </a>
      <a
        href="https://twitter.com/ColorblindPixl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Twitter profile"
      >
        <FontAwesomeIcon size="xl" icon={faTwitter} />
      </a>
      <a
        href="https://wa.me/c/50687492322"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My whatsapp contact"
      >
        <FontAwesomeIcon size="xl" icon={faWhatsapp} />
      </a>
      <a
        href="mailto:colorblindpixelzhou@gmail.com"
        aria-label="My email contact"
      >
        <FontAwesomeIcon size="xl" icon={faEnvelope} />
      </a>
    </div>
  );
}
