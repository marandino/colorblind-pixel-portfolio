interface PortfolioListProps {
  id: string;
  title: string;
  active: boolean;
  setSelected: (id: string) => void;
}

export default function PortfolioList({
  id,
  title,
  active,
  setSelected,
}: PortfolioListProps): JSX.Element {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
