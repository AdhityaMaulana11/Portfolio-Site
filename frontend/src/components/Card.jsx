export default function Card({ color, title, description, imgSrc, alt }) {
  return (
    <div className={`${color} p-6 border-4 border-black rounded-lg`}>
      <div className="w-12 h-12 mx-auto mb-4">
        <img src={imgSrc} alt={alt} />
      </div>
      <h3 className="text-center text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
