import React, { useEffect, useState } from "react";

// ✅ Import images
import img1 from "../assets/hero.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";
import { Link } from "react-router-dom";

// ✅ Type
type Slide = {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
};

// ✅ Slides Data
const slides: Slide[] = [
  {
    id: 1,
    tag: "Bill & Melinda Gates Foundation",
    title: "Empowering Communities Through Financial Support",
    description:
      "Explore funding opportunities designed to support individuals and communities in improving livelihoods, education, and economic stability.",
    image: img1,
    buttonText: "Get Started",
  },
  {
    id: 2,
    tag: "Global Health & Emergency Support",
    title: "COVID-19 Relief and Recovery Programs",
    description:
      "Access support initiatives focused on health response, recovery efforts, and assistance for those affected by global health challenges.",
    image: img2,
    buttonText: "Learn More",
  },
  {
    id: 3,
    tag: "Small Business & Innovation Grants",
    title: "Support for Entrepreneurs and Small Businesses",
    description:
      "Discover programs aimed at helping small businesses grow, innovate, and create lasting impact within their communities.",
    image: img3,
    buttonText: "Get Started",
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 " : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 text-white">
              
              <h6 className="flex items-center gap-2 text-sm mb-4">
                ⭐ {slide.tag}
              </h6>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>

              <p className="max-w-xl mb-6">
                {slide.description}
              </p>
<Link to={'/winners'}
 className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-blue-600 hover:text-white transition"
             >
{slide.buttonText}
              
</Link>
               
                
            </div>
          </div>
        </div>
      ))}

      {/* ⬅️ Prev Button */}
      <button
        onClick={() =>
          setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>

      {/* ➡️ Next Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>

      {/* 🔘 Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;