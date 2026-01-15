const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Bu Dina",
      date: "24 November 2025",
      text: "Minyak goreng dari PT Singosari Gulden Sejahtera kualitasnya sangat stabil, nggak mudah hitam meski dipakai berkali-kali. Masakan saya jadi lebih wangi dan renyah. Pelayanan timnya juga cepat dan responsif banget.",
    },
    {
      id: 2,
      name: "Pak Andang",
      date: "03 September 2025",
      text: "Sejak pakai Minyak Goreng Kita dari PT Singosari Gulden Sejahtera, pelanggan saya bilang gorengan jadi lebih renyah dan nggak cepat hitam. Selain kualitas bagus, harganya juga bersahabat buat usaha kecil kayak saya. Pasti langganan terus!",
    },
    {
      id: 3,
      name: "Pak Maman",
      date: "17 November 2025",
      text: "Kami rutin beli CPO 10 untuk kebutuhan refining, dan selama ini barang dari PT Singosari Gulden Sejahtera selalu sesuai spesifikasi, dokumen lengkap, dan pengiriman tepat waktu. Sangat direkomendasikan sebagai supplier sawit terpercaya.",
    },
    {
      id: 4,
      name: "Bu Sinta",
      date: "19 Oktober 2025",
      text: "Stok Minyak Goreng Kita dari PT Singosari Gulden Sejahtera selalu aman. Harganya bersaing dan pengiriman cepat. Ditambah ada kemasan rumah tangga dan industri, jadi lebih mudah saya jual ke berbagai segmen pasar.",
    },
    {
      id: 5,
      name: "Pak Tri",
      date: "07 Oktober 2025",
      text: "PFAD dari PT Singosari Gulden Sejahtera kualitasnya bagus, kadar FFA-nya sesuai standar dan cocok untuk produksi sabun. Harga juga lebih stabil dibanding supplier lain. Senang bisa kerja sama terus sampai sekarang.",
    },
  ];

  return (
    <section
      id="testimoni"
      className="py-16 bg-gradient-to-r from-green-900 to-primary-light"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Kata Pelanggan Kami
            </h2>
            <a
              href="#kontak"
              className="inline-block bg-secondary hover:bg-orange-400 text-gray-900 font-bold py-3 px-6 rounded-full transition-all"
            >
              Tulis Testimoni
              <svg
                className="inline-block w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Testimonial Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-lg border border-primary"
              >
                <div className="flex mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center justify-end">
                  <div className="text-right mr-3">
                    <h4 className="font-bold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                  <img
                    src="/images/1743561-200.png"
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
