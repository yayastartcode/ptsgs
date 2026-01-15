const Footer = () => {
  return (
    <footer id="kontak" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section with Image */}
        <div className="mb-12">
          <img 
            src="/images/bawah12.png" 
            alt="Footer Banner"
            className="w-full"
          />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="text-center lg:text-left">
            <img 
              src="/images/sclg.png" 
              alt="PT Singosari Gulden Sejahtera"
              className="h-24 sm:h-28 lg:h-32 w-auto object-contain mx-auto lg:mx-0 mb-4 drop-shadow-[0_0_3px_#fff]"
            />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-primary-light mb-1">Jakarta:</div>
                  <span className="text-sm">Jl. TB Simatupang No.kav. 23-24, RT.1/RW.1, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Jakarta</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-primary-light mb-1">Bekasi:</div>
                  <span className="text-sm">Lagoon Avenue, Management Office Lt. UG, Bekasi Selatan 17148</span>
                </div>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+62881010718595" className="hover:text-primary-light">+62 881-0107-18595</a>
              </li>
             
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#beranda" className="hover:text-primary-light">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-primary-light">Tentang Kami</a></li>
              <li><a href="#produk" className="hover:text-primary-light">Produk</a></li>
              <li><a href="#galeri" className="hover:text-primary-light">Galeri</a></li>
              <li><a href="#testimoni" className="hover:text-primary-light">Testimoni</a></li>
              <li><a href="#blog" className="hover:text-primary-light">Blog</a></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lokasi</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.7929585517013!2d106.8034279!3d-6.2909207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e53e3aaaaf%3A0xc77f7ba1fe84ad17!2sJl.%20TB%20Simatupang%20No.kav.%2023-24%2C%20RT.1%2FRW.1%2C%20Cilandak%20Bar.%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012430!5e0!3m2!1sid!2sid!4v1765791076889!5m2!1sid!2sid"
              width="100%" 
              height="200" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} PT Singosari Gulden Sejahtera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
