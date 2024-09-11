import "./testimonials.scss";

type Testimonial = {
  id: number;
  name: string;
  title: string;
  img: string;
  desc: string;
  featured?: boolean;
};

export default function Testimonials() {
  const data: Testimonial[] = [
    {
      id: 1,
      name: "Hi-C Costa Rica",
      title: "Beverage Company",
      img:
        "#",
      desc: "Beverage company from Coca-Cola FEMSA",
    },
    {
      id: 2,
      name: "Tropical",
      title: "Juice Company",
      img:
        "#",
      desc:
        "Tropical is Costa Rica's top brand for Refreshing Beverages and Iced Tea.",
      featured: true,
    },
    {
      id: 3,
      name: "Cerveza Patagonia",
      title: "Brewing Company",
      img:
        "#",
      desc:
        "Patagonia is an Argentine beer brand owned by Patagonia Brewing Company.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Clients</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="user" src={d.img} alt={d.name} />
            </div>
            <div className="center">{d.desc}</div>
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
