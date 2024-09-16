import SocialMediaIcon from "./socialMediaLinks/SocialMediaIcon";
import SocialMediaSection from "./socialMediaLinks/SocialMediaSection";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-title">
      <div className="footerHeaderRow">
        <h2 id="footer-title">Pixel artist and automation engineer</h2>
        <img
          src="https://res.cloudinary.com/dkhpxyxnt/image/upload/c_thumb,w_35,g_face/v1726200029/zhoulogo_otm7rq.png"
          alt="Logo de Zhou Zheng"
          className="logo"
        />
      </div>

      <div className="footerContent">
        <div className="footerColumn">
          <SocialMediaSection />
          <div className="workMedia">
            <SocialMediaIcon
              socialMedia={"fab fa-github"}
              URL={"https://github.com/ZhouZhengCarlos"}
              aria-label="Visita mi perfil de GitHub"
            />
            <SocialMediaIcon
              socialMedia={"fab fa-linkedin"}
              URL={"https://cr.linkedin.com/in/zhouzhengcarlos/en"}
              aria-label="Visita mi perfil de LinkedIn"
            />
            <SocialMediaIcon
              socialMedia={"fab fa-discord"}
              URL={"https://discord.gg/yourdiscordserver"}
              aria-label="Únete a mi servidor de Discord"
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
                aria-label="Visita mi tienda en WhatsApp"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/perronstorecr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita mi tienda en Instagram"
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
                aria-label="Únete a nuestro grupo de WhatsApp"
              >
                WhatsApp Group
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/yourdiscordserver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Únete a nuestro servidor de Discord"
              >
                Discord Server
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
                aria-label="Leer sobre Carlos Zhou en Voz de Guanacaste"
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
                aria-label="Leer sobre el arte de Colorblind Pixel en La Nación"
              >
                Reducir Costa Rica a píxeles: El arte de Colorblind Pixel
              </a>
            </li>
            <li>
              <a
                href="https://www.nacion.com/tico-gamers/tendencias/tico-rescata-la-identidad-de-costa-rica-un-pixel-a/EBR65DFUYVG4BOVI7TN2SBZK5E/story/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leer sobre cómo Carlos Zhou rescata la identidad de Costa Rica en La Nación"
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
                aria-label="Leer sobre el arte de píxeles en La Teja"
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
