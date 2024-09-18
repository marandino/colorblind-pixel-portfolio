// import React, { useState } from 'react';
import CloudinaryImage from './CloudinaryImage';
import { useCloudinaryImages } from '../hooks/useCloudinaryImages';


const ShopGrid: React.FC = () => {
    // const [visibleItems, setVisibleItems] = useState<number>(4);
    // const [isEndOfList, setIsEndOfList] = useState<boolean>(false);

    const { images, loading, error } = useCloudinaryImages('merch');

    // const handleLoadMore = () => {
    //     const newVisibleCount = visibleItems + 4;
    //     setVisibleItems(newVisibleCount);
        
    //     if (newVisibleCount >= images.length) {
    //         setIsEndOfList(true);
    //     }
    // };

    // const handleLoadLess = () => {
    //     setVisibleItems(4);
    //     setIsEndOfList(false);
    // };

    const isMobile = window.innerWidth <= 768;
    

    return (
        <div className="shop-container">
            <h1>SHOP</h1>
            {loading && <p>Loading images...</p>}
            {error && <p>Error loading images: {error.message}</p>}
            <div className="shop-grid">
                {/* {images.slice(0, visibleItems).map((image) => ( */}
                {images.slice(0).map((image) => (
                    <a href={image.URL} key={image.public_id} className="grid-item">
                        <CloudinaryImage
                            public_id={image.public_id}
                            alt={image.alt || image.public_id}
                            height={isMobile ? 300 : 600}
                            width={isMobile ? 300 : 600}
                        />
                    </a>
                ))}
            </div>
            {/* <div className="button-group">
                {!isEndOfList && images.length > visibleItems && (
                    <button className="load-more" onClick={handleLoadMore}>
                        Load More
                    </button>
                )}
                {isEndOfList && (
                    <button className="load-less" onClick={handleLoadLess}>
                        Load Less
                    </button>
                )}
            </div> */}
        </div>
    );
};

export default ShopGrid;
