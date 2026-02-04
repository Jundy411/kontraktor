import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Sponsor1 from '../../assets/tiga-roda.png';
import Sponsor2 from '../../assets/besi-baja.png';
import Sponsor3 from '../../assets/waskita.png';
import Sponsor4 from '../../assets/holcim.png';
import Sponsor5 from '../../assets/garuda.png'

export default function Sponsor() {

  useEffect(()=> {
    Aos.init();
  },[])

  const sponsors = [
    {
      id: 1,
      name: "Tiga Roda",
      logo: Sponsor1,
    },
    {
      id: 2,
      name: "Besi Baja Murah",
      logo: Sponsor2,
    },
    {
      id: 3,
      name: "Waskita",
      logo: Sponsor3,
    },
    {
      id: 4,
      name: "Holcim",
      logo: Sponsor4,
    },
    {
      id: 5,
      name: "Garuda Besi",
      logo:Sponsor5,
    },
  ];

  return (
    <div className="w-full bg-gray-900 py-10">
      <div data-aos="fade-up">
      <div className="text-center mb-16">
        <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
          Partner Kami
        </h4>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
          Partner Yang Mendukung Kami
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 w-full"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
