import { useState, useEffect } from "react";

export default function ProjectCard({
  title,
  description,
  images,
  reverse,
  border,
  highlight,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`md:flex ${
        reverse ? "flex-row-reverse" : ""
      } items-center gap-8`}
    >
      <div className="flex-1" id={`highlight-${highlight}`}>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-[#737373] mb-4">{description}</p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          className="inline-flex items-center text-[#252525] border border-[#252525] rounded-full px-5 py-2 hover:bg-[#252525] hover:text-white transition"
        >
          See Full Project &nbsp; →
        </a>
      </div>
      <div className="flex-1 relative">
        <img
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          className={`rounded-2xl border-4 ${border} transition duration-700 ease-in-out card-img`}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h4 className="text-xl font-bold mb-4">Coming Soon</h4>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#FFDBD0] text-[#1A1A1A] px-4 py-2 font-bold border-2 border-black rounded-lg hover:bg-[#C4E7E1] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
