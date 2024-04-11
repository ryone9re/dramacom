// components/CardContainer.tsx
import type React from "react";
import DoramaCard from "~/components/molecules/DoramaCard";

interface CardData {
  id: number;
  title: string;
  imageSrc: string;
  rating: number;
  description: string;
}

interface CardContainerProps {
  className?: string;
  label: string;
  isCarousel?: boolean;
  cards: CardData[];
}

const CardContainer: React.FC<CardContainerProps> = ({
  className = "",
  label,
  isCarousel = true,
  cards,
}) => {
  const carouselClassName = isCarousel ? "carousel" : "";
  return (
    <div className={`flex flex-col ${className}${carouselClassName}`}>
      <div className="text-white text-lg font-bold ml-3">{label}</div>
      <div className="bg-darkgray rounded-xl flex space-x-4 overflow-x-auto p-4">
        {cards.map((card) => (
          <DoramaCard
            key={card.id}
            title={card.title}
            imageSrc={card.imageSrc}
            rating={card.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
