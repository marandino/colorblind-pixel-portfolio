import SocialMediaIcon from "./socialMediaLinks/SocialMediaIcon";
import SocialMediaSection from "./socialMediaLinks/SocialMediaSection";

export default function Footer() {
  return (
    <footer>
      <div className="footerHeaderRow">
        <p>Pixel artist and automation engineer</p>
        <img
          src="https://res.cloudinary.com/dkhpxyxnt/image/upload/c_thumb,w_35,g_face/v1726200029/zhoulogo_otm7rq.png"
          alt="Menu Logo"
          className="logo"
        />
      </div>

      <div className="footerContent">
        <div className="footerColumn">
          <SocialMediaSection />
          <SocialMediaIcon
            socialMedia={"fab fa-github"}
            URL={"https://github.com/ZhouZhengCarlos"}
          />
          <SocialMediaIcon
            socialMedia={"fab fa-linkedin"}
            URL={"https://cr.linkedin.com/in/zhouzhengcarlos/en"}
          />
          <SocialMediaIcon
            socialMedia={"fab fa-discord"}
            URL={"https://discord.gg/yourdiscordserver"}
          />
        </div>

        <div className="footerColumn">
          <h5>You can find my merch in:</h5>
          <ul>
            <li>
              <a
                href="https://wa.me/c/50687492322"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Catalogo
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/perronstorecr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram Store
              </a>
            </li>
          </ul>
        </div>

        <div className="footerColumn">
          <h5>Our Communities:</h5>
          <ul>
            <li>
              <a
                href="https://chat.whatsapp.com/Dw1ptkbkUD8KY9KDMrMEXW"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Group
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/yourdiscordserver"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord Server
              </a>
            </li>
          </ul>
        </div>

        <div className="footerColumn">
          <h5>About Me:</h5>
          <ul>
            <li>
              <a
                href="https://www.nacion.com/revista-dominical/reducir-costa-rica-a-pixeles-el-arte-de-colorblind/IKJL5UEWT5D65F4NZD2V4C7FKI/story/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reducir Costa Rica a píxeles: El arte de Colorblind Pixel
              </a>
            </li>
            <li>
              <a
                href="https://www.nacion.com/tico-gamers/tendencias/tico-rescata-la-identidad-de-costa-rica-un-pixel-a/EBR65DFUYVG4BOVI7TN2SBZK5E/story/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tico rescata la identidad de Costa Rica un píxel a la vez, ¿cómo
                lo hace?
              </a>
            </li>
            <li>
              <a
                href="https://www.lateja.cr/tico-gamers/tendencias/tico-rescata-la-identidad-de-costa-rica-un-pixel-a/EBR65DFUYVG4BOVI7TN2SBZK5E/story/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tico rescata la identidad de Costa Rica un píxel a la vez, ¿cómo
                lo hace?
              </a>
            </li>
            <li>
              <a
                href="https://vozdeguanacaste.com/el-liberiano-que-mira-guanacaste-version-nintendo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carlos Zhou, el liberiano que mira una Guanacaste en «versión
                Nintendo»
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
