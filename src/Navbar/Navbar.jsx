import React from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();
  // const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function handleBtn() {
    menu.classList.toggle("hidden");
  }
  // btn.addEventListener("click", () => {
  //   menu.classList.toggle("hidden");
  // });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* <!-- Logo --> */}
            <a
              className="flex items-center gap-2"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded text-white font-bold text-xl">
                <i className="fa-solid fa-building"></i>
              </div>
              <span className="font-heading text-2xl font-bold text-primary tracking-wide">
                TUKANG BANGUN DUMELING
              </span>
            </a>

            {/* <!-- Desktop Menu --> */}
            <div className="hidden md:flex space-x-8 items-center font-medium text-gray-600">
              <NavLink to={"/"}>
                <p className="hover:text-primary transition">Beranda</p>
              </NavLink>
              <NavLink to={"/about"}>
                <p className="hover:text-primary transition">Tentang Kami</p>
              </NavLink>
              <NavLink to={"/service"}>
                <p className="hover:text-primary transition">Layanan</p>
              </NavLink>
              <NavLink to={"portfolio"}>
                <p className="hover:text-primary transition">Portofolio</p>
              </NavLink>
              <p className="px-5 py-2 bg-primary text-white rounded hover:bg-blue-800 transition shadow-lg transform hover:-translate-y-0.5">
                Hubungi Kami
              </p>
            </div>

            {/* <!-- Mobile Menu Button --> */}
            <button
              onClick={() => handleBtn}
              id="mobile-menu-btn"
              className="md:hidden text-2xl text-gray-700 focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu Dropdown --> */}
        <div
          id="mobile-menu"
          className="block md:hidden bg-white border-t absolute w-full shadow-xl"
        >
          <div className="flex flex-col p-4 space-y-4 font-medium">
            <a className="mobile-link text-gray-600 hover:text-primary">
              Beranda
            </a>
            <a className="mobile-link text-gray-600 hover:text-primary">
              Tentang Kami
            </a>
            <a className="mobile-link text-gray-600 hover:text-primary">
              Layanan
            </a>
            <a className="mobile-link text-gray-600 hover:text-primary">
              Portofolio
            </a>
            <a className="mobile-link px-4 py-2 bg-primary text-white rounded text-center">
              Hubungi Kami
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
