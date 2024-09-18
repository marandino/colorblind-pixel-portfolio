import React from 'react';

const Shop: React.FC = () => {
    const products = [
      {
        id: 1,
        imgSrc: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246929/merch/gfctd1ynsdcpchzvgukc.jpg',
        title: 'Camisa White Rabbit',
        price: '₡12.000',
        description: 'Camisa',
        link: 'https://wa.me/p/7686015784857820/50687492322'
      },
      {
        id: 2,
        imgSrc: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726617927/us7q7f1qbhkbtdp6aafo_sgsyiz.jpg',
        title: 'Pikachu ICE Pin',
        price: '₡3.000',
        description: 'Pin',
        link: 'https://wa.me/p/8180489495343269/50687492322'
      },
      {
        id: 3,
        imgSrc: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246933/merch/emalomj0s3u7d8xhokrv.jpg',
        title: 'Totebag Costa Rica',
        price: '₡7.000',
        description: 'Totebag',
        link: 'https://wa.me/p/7752259484893465/50687492322'
      },
      {
        id: 4,
        imgSrc: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726616353/c0doyokbwlo0wniunuvh_rnzqd7.jpg',
        title: 'Llavero Caldosa Magikarp',
        price: '₡4.000',
        description: 'Llavero',
        link: 'https://wa.me/p/7874008772668952/50687492322'
      },
      {
        id: 5,
        imgSrc: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726617083/gxagq3wvzxcfjs2g3fto_erwign.jpg',
        title: 'Sticker Quesitos',
        price: '₡1.000',
        description: 'Sticker',
        link: 'https://wa.me/p/7838357832907825/50687492322'
      },
      {
        id: 6,
        imgSrc: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726616565/cxbyeaty0b8efda4ga4q_kxtqvn.jpg',
        title: 'Sticker Pinto Numar',
        price: '₡1.000',
        description: 'Sticker',
        link: 'https://wa.me/p/7523055241137886/50687492322'
      },
      {
        id: 7,
        imgSrc: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726616711/fgyugcqyjegexcobsrju_a56j6r.jpg',
        title: 'Llavero Fresco Leche',
        price: '₡4.000',
        description: 'Llavero',
        link: 'https://wa.me/p/7927276910720698/50687492322'
      },
      {
        id: 8,
        imgSrc: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726616881/fojvzjfq4wbywennpzld_ckbbaz.jpg',
        title: 'Mimikyu Pin',
        price: '₡3.000',
        description: 'Pin',
        link: 'https://wa.me/p/26024428090536504/50687492322'
      },
    ];
  
    return (
        <section className="shop-container">
          <h1>Merchandising</h1>
          <div className="shop-grid">
            {products.map((product) => (
              <a href={product.link} className="card" key={product.id} target="_blank" rel="noopener noreferrer">
                <img src={product.imgSrc} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="price">{product.price}</p>
              </a>
            ))}
          </div>
        </section>
      );
    };

  export default Shop;
