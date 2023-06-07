import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Hi-C Costa Rica",
      title: "Beverage Company",
      img:
        "https://firebasestorage.googleapis.com/v0/b/colorblind-pixel-c2778.appspot.com/o/Clients%20Logo%2F272737718_459784949182554_5457756569160820875_n.jpg?alt=media&token=502e4838-c07e-45d3-8bdb-6e1facb16b68",
      desc:
        "Beverage company from Coca-Cola FEMSA",
    },
    {
      id: 2,
      name: "Tropical",
      title: "Juice Company",
      img:
        "https://firebasestorage.googleapis.com/v0/b/colorblind-pixel-c2778.appspot.com/o/Clients%20Logo%2F275199390_5633819133304964_8257159863364186133_n.jpg?alt=media&token=68b3b4bb-7ac0-48e3-b43d-f381fc4ff2e4",
      desc:
        "Tropical is Costa Rica's top brand for Refreshing Beverages and Iced Tea.",
      featured: true,
    },
    {
      id: 3,
      name: "Cerveza Patagonia",
      title: "Brewing Company",
      img:
        "https://firebasestorage.googleapis.com/v0/b/colorblind-pixel-c2778.appspot.com/o/Clients%20Logo%2Fbrewery-476315_268dc_hd.jpeg?alt=media&token=9425df6a-6698-47c3-aaa8-982466709cdd",
      desc:
        "Patagonia is an Argentine beer brand owned by Patagonia Brewing Company.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Clients</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
