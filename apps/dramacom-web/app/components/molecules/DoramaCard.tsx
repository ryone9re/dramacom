// components/Card.tsx
import { Link } from "@remix-run/react";
import type React from "react";

interface CardProps {
  id: string;
  title: string;
  rating: number;
  imageSrc: string;
  isCarouselItem?: boolean;
}

const DoramaCard: React.FC<CardProps> = ({
  id,
  title,
  rating,
  imageSrc,
  isCarouselItem = true,
}) => {
  const carouselClass = isCarouselItem ? "carousel-item" : "";
  return (
    <Link to={`/drama/${id}`}>
      <div
        className={`card card-compact bg-base-100 shadow-xl ${carouselClass}`}
      >
        <figure>
          <img src={imageSrc} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="rating rating-md rating-half">
            {/* Generate rating stars */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DoramaCard;
