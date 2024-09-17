import React, { useState } from 'react';

interface ShopItem {
    id: number;
    image: string;
    name: string;
}

const items: ShopItem[] = [
    { id: 1, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246933/merch/emalomj0s3u7d8xhokrv', name: 'Item 1'},
    { id: 2, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246933/merch/emalomj0s3u7d8xhokrv', name: 'Item 2'},
    { id: 3, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246933/merch/emalomj0s3u7d8xhokrv', name: 'Item 3'},
    { id: 4, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246933/merch/emalomj0s3u7d8xhokrv', name: 'Item 4'},
    { id: 5, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246929/merch/gfctd1ynsdcpchzvgukc', name: 'Item 5'},
    { id: 6, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246929/merch/gfctd1ynsdcpchzvgukc', name: 'Item 6'},
    { id: 7, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246929/merch/gfctd1ynsdcpchzvgukc', name: 'Item 7'},
    { id: 8, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246929/merch/gfctd1ynsdcpchzvgukc', name: 'Item 8'},
    { id: 9, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246929/merch/gfctd1ynsdcpchzvgukc', name: 'Item 9'},
    { id: 10, image: 'https://res.cloudinary.com/dkhpxyxnt/image/upload/v1726246929/merch/gfctd1ynsdcpchzvgukc', name: 'Item 10'},
];

const ShopGrid: React.FC = () => {
    const [visibleItems, setVisibleItems] = useState<number>(4);
    const [isEndOfList, setIsEndOfList] = useState<boolean>(false);

    const handleLoadMore = () => {
        const newVisibleCount = visibleItems + 4;
        setVisibleItems(newVisibleCount);
        
        if (newVisibleCount >= items.length) {
            setIsEndOfList(true);
        }
    };

    const handleLoadLess = () => {
        setVisibleItems(4);
        setIsEndOfList(false);
    };

    return (
        <div className="shop-container">
            <h1>SHOP</h1>
            <div className="shop-grid">
                {items.slice(0, visibleItems).map(item => (
                    <div key={item.id} className="grid-item">
                        <img src={item.image} alt={item.name} />
                        <div className="grid-item-name">{item.name}</div>
                    </div>
                ))}
            </div>
            <div className="button-group">
                {!isEndOfList && visibleItems < items.length && (
                    <button className="load-more" onClick={handleLoadMore}>
                        Load More
                    </button>
                )}
                {isEndOfList && (
                    <button className="load-less" onClick={handleLoadLess}>
                        Load Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default ShopGrid;
