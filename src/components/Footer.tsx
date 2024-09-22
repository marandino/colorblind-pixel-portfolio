export default function Footer() {
  const footerElements = [
    {
      title: "Social Media",
      links: [
        {
          label: "Instagram",
          url: "https://www.instagram.com/colorblind_pixel/",
        },
        { label: "Twitter", url: "https://twitter.com/ColorblindPixl" },
        { label: "GitHub", url: "https://github.com/ZhouZhengCarlos" },
        {
          label: "LinkedIn",
          url: "https://cr.linkedin.com/in/zhouzhengcarlos/en",
        },
      ],
    },

    {
      title: "Merchandise",
      links: [
        { label: "WhatsApp Store", url: "https://wa.me/c/50687492322" },
        {
          label: "Instagram Store",
          url: "https://www.instagram.com/perronstorecr/",
        },
      ],
    },

    {
      title: "Media Coverage",
      links: [
        {
          label: "Voz de Guanacaste",
          url: "https://vozdeguanacaste.com/el-liberiano-que-mira-guanacaste-version-nintendo/",
        },
        {
          label: "La Nación",
          url: "https://www.nacion.com/tico-gamers/tendencias/tico-rescata-la-identidad-de-costa-rica-un-pixel-a/EBR65DFUYVG4BOVI7TN2SBZK5E/story/",
        },
        {
          label: "La Teja",
          url: "https://www.lateja.cr/tico-gamers/tendencias/tico-rescata-la-identidad-de-costa-rica-un-pixel-a/EBR65DFUYVG4BOVI7TN2SBZK5E/story/",
        },
      ],
    },
  ];

  return (
    <footer id="footer">
      <div className="footer-content">
        {footerElements.map((element) => (
          <FooterList
            key={element.title}
            title={element.title}
            links={element.links}
          />
        ))}
      </div>
    </footer>
  );
}

export function FooterList({
  title,
  links,
}: {
  title: string;
  links: { label: string; url: string }[];
}) {
  return (
    <ul className="footer-list">
      <li>
        <h3>{title}</h3>
      </li>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
