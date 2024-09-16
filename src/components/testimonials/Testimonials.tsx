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
        "https://res.cloudinary.com/dkhpxyxnt/image/upload/v1725932152/3b735fd1-eb1d-4d60-9bd2-d805ec1dfdb1.png",
      desc: "Beverage company from Coca-Cola FEMSA.",
    },
    {
      id: 2,
      name: "Tropical",
      title: "Juice Company",
      img:
        "https://res.cloudinary.com/dkhpxyxnt/image/upload/v1725932135/64aaf1b4-4457-454d-b9d1-1ffebb05857a.png",
      desc:
        "Tropical is Costa Rica's top brand for Refreshing Beverages and Iced Tea.",
    },
    {
      id: 3,
      name: "Cerveza Patagonia",
      title: "Brewing Company",
      img:
        "https://res.cloudinary.com/dkhpxyxnt/image/upload/v1725932131/eda3d600-7499-406c-bbbb-a7648fe26d74.png",
      desc:
        "Patagonia is an Argentine beer brand owned by Patagonia Brewing Company.",
    },
    {
      id: 4,
      name: "Dos Pinos",
      title: "Food Company",
      img:
        "https://res.cloudinary.com/drfhleop1/image/upload/c_thumb,w_200,g_face/v1726441082/dospinos_fltxkc.png",
      desc: "Costa Rican cooperative producer of dairy, beverages, and candy products.",
    },
    {
      id: 5,
      name: "Heineken",
      title: "Beverage Company",
      img:
        "https://res.cloudinary.com/drfhleop1/image/upload/c_thumb,w_200,g_face/v1726441082/heineken_yyegkp.png",
      desc: "Dutch multinational brewing company.",
    },
    {
      id: 6,
      name: "Spoon",
      title: "Bakery Company",
      img:
        "https://res.cloudinary.com/drfhleop1/image/upload/c_thumb,w_200,g_face/v1726441083/spoon_zqzeoy.jpg",
      desc: "Is a Costa Rican bakery company.",
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
