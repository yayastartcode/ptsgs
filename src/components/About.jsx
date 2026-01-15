const About = () => {
  return (
    <section id="tentang" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              PT Singosari Gulden Sejahtera
            </h2>
            <div className="space-y-4 text-gray-700 text-justify">
              <p>
                <strong>PT Singosari Gulden Sejahtera</strong> adalah perusahaan yang bergerak di bidang distribusi dan perdagangan produk kelapa sawit serta turunannya. Kami hadir untuk memenuhi kebutuhan minyak sawit berkualitas bagi berbagai sektor industri dan konsumen domestik. Dengan dukungan jaringan pemasok terpercaya dan sistem distribusi yang efisien, kami berkomitmen memberikan produk terbaik sesuai standar nasional dan internasional.
              </p>
              <p>
                Sebagai pelaku usaha di industri kelapa sawit, PT Singosari Gulden Sejahtera terus mengembangkan layanan dan memperluas jangkauan pasar ke berbagai wilayah di Indonesia. Fokus kami adalah membangun hubungan kerjasama yang saling menguntungkan dengan para mitra usaha, demi terciptanya ketersediaan pasokan minyak sawit yang stabil dan berkualitas di pasar nasional.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <img 
              src="/images/truk.jpg" 
              alt="PT Singosari Gulden Sejahtera"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
