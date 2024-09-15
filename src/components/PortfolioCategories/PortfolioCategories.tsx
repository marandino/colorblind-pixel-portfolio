import React from "react";

interface PortfolioCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const PortfolioCategories: React.FC<PortfolioCategoriesProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="portfolio-categories">
      {categories.map((category) => (
        <button
          className={`button ${category === activeCategory ? "active" : ""}`}
          key={category}
          onClick={() => onCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default PortfolioCategories;
