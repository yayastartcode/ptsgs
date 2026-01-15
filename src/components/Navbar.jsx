import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center py-1">
            <img
              src="/images/sgslg.png"
              alt="PT Singosari Gulden Sejahtera"
              className="h-12 sm:h-14 lg:h-16 xl:h-20 w-auto object-contain drop-shadow-[0_0_2px_#fff]"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg fill="#fff" width="30px" height="30px" viewBox="0 0 20 20">
              <path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,5z" />
              <path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z" />
              <path d="M19,17H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,17,19,17z" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#beranda"
              className="text-white hover:text-primary-light transition-colors"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className="text-white hover:text-primary-light transition-colors"
            >
              Tentang Kami
            </a>
            <a
              href="#produk"
              className="text-white hover:text-primary-light transition-colors"
            >
              Produk
            </a>
            <a
              href="#galeri"
              className="text-white hover:text-primary-light transition-colors"
            >
              Galleri
            </a>
            <a
              href="#testimoni"
              className="text-white hover:text-primary-light transition-colors"
            >
              Testimoni
            </a>
            <a
              href="#blog"
              className="text-white hover:text-primary-light transition-colors"
            >
              Blog
            </a>
            <a
              href="#kontak"
              className="text-white hover:text-primary-light transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#beranda"
                className="text-white hover:text-primary-light transition-colors"
              >
                Beranda
              </a>
              <a
                href="#tentang"
                className="text-white hover:text-primary-light transition-colors"
              >
                Tentang Kami
              </a>
              <a
                href="#produk"
                className="text-white hover:text-primary-light transition-colors"
              >
                Produk
              </a>
              <a
                href="#galeri"
                className="text-white hover:text-primary-light transition-colors"
              >
                Galleri
              </a>
              <a
                href="#testimoni"
                className="text-white hover:text-primary-light transition-colors"
              >
                Testimoni
              </a>
              <a
                href="#blog"
                className="text-white hover:text-primary-light transition-colors"
              >
                Blog
              </a>
              <a
                href="#kontak"
                className="text-white hover:text-primary-light transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
