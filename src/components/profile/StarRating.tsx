export default function StarRating({
  rating,
  size = 20,
}: {
  rating: number;
  size?: number;
}) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-0.5 text-[#F59E0B]">
      {stars.map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        const icon = filled ? "star" : half ? "star_half" : "star";
        const opacity = filled || half ? "" : "opacity-30";
        return (
          <span
            key={star}
            className={`material-symbols-outlined filled ${opacity}`}
            style={{ fontSize: size }}
          >
            {icon}
          </span>
        );
      })}
    </div>
  );
}
