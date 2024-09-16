import SocialMediaIcon from "./socialMediaLinks/SocialMediaIcon";
import SocialMediaSection from "./socialMediaLinks/SocialMediaSection";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-title">
      <div className="footerHeaderRow">
        <h2 id="footer-title">Pixel artist and automation engineer</h2>
        <img
          src="https://res.cloudinary.com/dkhpxyxnt/image/upload/c_thumb,w_35,g_face/v1726200029/zhoulogo_otm7rq.png"
          alt="Zhou Zheng Logo"
          className="logo"
        />
      </div>

      <div className="footerContent">
        <div className="footerColumn">
          <SocialMediaSection />
          <div className="workMedia">
            <SocialMediaIcon
              socialMedia={"fa-github"}
              URL={"https://github.com/ZhouZhengCarlos"}
              aria-label="Visit my GitHub profile"
            />
            <SocialMediaIcon
              socialMedia={"fa-linkedin"}
              URL={"https://cr.linkedin.com/in/zhouzhengcarlos/en"}
              aria-label="Visit my LinkedIn profile"
            />
            <SocialMediaIcon
              socialMedia={"fa-whatsapp"}
              URL={"https://wa.me/50687492322"}
              aria-label="Contact me for commissions"
            />
          </div>
        </div>

        <div className="footerColumn">
          <h3>You can find my merch in:</h3>
          <ul>
            <li>
              <a
                href="https://wa.me/c/50687492322"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my WhatsApp store"
              >
                WhatsApp Store
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/perronstorecr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Instagram Store"
              >
                Instagram Store
              </a>
            </li>
          </ul>
        </div>

        <div className="footerColumn">
          <h3>Our Communities:</h3>
          <ul>
            <li>
              <a
                href="https://chat.whatsapp.com/Dw1ptkbkUD8KY9KDMrMEXW"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our WhatsApp Group"
              >
                WhatsApp Group
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@colorblindpixel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Tiktok community"
              >
                Tiktok
              </a>
            </li>
          </ul>
        </div>

        <div className="footerColumn">
          <h3>About Me:</h3>
          <p>Placeholder text</p>
          <ul>
            <li>
              <a
                href="https://vozdeguanacaste.com/el-liberiano-que-mira-guanacaste-version-nintendo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read about Carlos Zhou on Voz de Guanacaste"
              >
                Carlos Zhou, el liberiano que mira una Guanacaste en «versión
                Nintendo»
              </a>
            </li>
            <li>
              <a
                href="https://www.nacion.com/revista-dominical/reducir-costa-rica-a-pixeles-el-arte-de-colorblind/IKJL5UEWT5D65F4NZD2V4C7FKI/story/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read about Costa Rica's pixel art on La Nacion"
              >
                Reducir Costa Rica a píxeles: El arte de Colorblind Pixel
              </a>
            </li>
            <li>
              <a
                href="https://www.nacion.com/tico-gamers/tendencias/tico-rescata-la-identidad-de-costa-rica-un-pixel-a/EBR65DFUYVG4BOVI7TN2SBZK5E/story/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read about Costa Rican identity in pixel art"
              >
                La Nación: Tico rescata la identidad de Costa Rica un píxel a la
                vez, ¿cómo lo hace?
              </a>
            </li>
            <li>
              <a
                href="https://www.lateja.cr/tico-gamers/tendencias/tico-rescata-la-identidad-de-costa-rica-un-pixel-a/EBR65DFUYVG4BOVI7TN2SBZK5E/story/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read about pixel art on La Teja"
              >
                La Teja: Tico rescata la identidad de Costa Rica un píxel a la
                vez, ¿cómo lo hace?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
