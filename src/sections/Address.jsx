import React from "react";

const Address = () => {
  const urlMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.857311195339!2d110.33352344285275!3d-7.590505308948826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a61836f2211cb%3A0x723b7ea623da07ef!2sDewi%20Suba!5e0!3m2!1sid!2sid!4v1695879611797!5m2!1sid!2sid";
  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
            <iframe
              title="lokasi"
              src={`${urlMap}`}
              className="w-full h-[40vh] rounded-lg shadow-[0px_0px_10px_2px_#00000024]"
            />
            <div className="lg:w-1/2">
              <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
                Layanan Kami
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Membangun Bangunan Baru
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Address;
