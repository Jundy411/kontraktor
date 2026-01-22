import React from "react";
import Blank from "../Blank";
import Footer from "../Footer";
import ScrollTop from "../../content/ScrollTop";
import { useNavigate } from "react-router-dom";
const Arsitek = () => {
  const navigate = useNavigate();
  return (
    <>
      <ScrollTop />
      <Blank />
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className=" mb-10">
            <div className=" flex items-center gap-3 font-bold uppercase">
              <span
                className=" cursor-pointer"
                onClick={() => navigate("/service")}
              >
                Layanan
              </span>
              / <span>Design & Arsitek</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tim Konstruksi"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded shadow-xl border-l-4 border-secondary hidden md:block">
                <p className="text-4xl font-heading font-bold text-primary">15+</p>
                <p className="text-gray-600 text-sm font-medium">
                  Tahun Pengalaman
                </p>
              </div> */}
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
                Layanan Kami
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Mendesain Arsitektur Bangungan
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>CV Bumi Sari Hijau </strong>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Iure molestias obcaecati, iste
                blanditiis animi nisi beatae, sapiente, temporibus odio sunt
                voluptatem? Deserunt perferendis doloribus pariatur vitae odio
                esse sed aliquid error. Nisi quibusdam fuga facere?
                Reprehenderit laudantium non quam voluptatum provident
                consectetur quas architecto porro praesentium, maiores numquam
                vel dolores!
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
                odio. Necessitatibus officia quam molestias autem, dolor porro
                minus omnis voluptate.
              </p>

              {/* <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-secondary text-xl mt-1"></i>
                  <div>
                    <h5 className="font-bold text-dark">Tepat Waktu</h5>
                    <p className="text-sm text-gray-500">
                      Manajemen proyek efisien.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-secondary text-xl mt-1"></i>
                  <div>
                    <h5 className="font-bold text-dark">Transparan</h5>
                    <p className="text-sm text-gray-500">
                      RAB detail & tanpa biaya tersembunyi.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Arsitek;
