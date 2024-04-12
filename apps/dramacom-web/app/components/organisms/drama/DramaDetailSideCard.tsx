import type { DoramaDetailCardProps } from "./DramaDetailCard";

export const DramaDetailSideCard: React.FC<DoramaDetailCardProps> = ({
  ...props
}) => {
  return (
    <div className="bg-darkgray rounded-xl">
      <img
        className="w-auto h-auto object-cover object-center"
        src={props.thumbnail}
        alt={props.title}
      />
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p className="text-lg">{props.description}</p>
    </div>
  );
};
