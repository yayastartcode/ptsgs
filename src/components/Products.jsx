const Products = () => {
  const products = [
    {
      id: 1,
      name: "Minyak Goreng Kita",
      image: "/images/534980130_Minyakita-5.webp",
      description:
        "Minyak Goreng Kita adalah minyak goreng berkualitas tinggi hasil olahan dari CPO pilihan, melalui..",
    },
    {
      id: 2,
      name: "CPO 10 (Crude Palm Oil FFA ≤ 10%)",
      image: "/images/cp10.jpeg",
      description:
        "CPO 10 adalah minyak sawit mentah dengan kadar Free Fatty Acid (FFA) maksimal 10%, memiliki..",
    },
    {
      id: 3,
      name: "PFAD (Palm Fatty Acid Distillate)",
      image: "/images/961904037_620cbea31ef2f896567039.webp",
      description:
        "PFAD adalah produk samping hasil refining minyak sawit yang memiliki kandungan FFA tinggi, biasanya..",
    },
    {
      id: 4,
      name: "RBD Palm Olein",
      image: "/images/140393037_qqq.jpg",
      description:
        "RBD Palm Olein adalah hasil refining Crude Palm Oil yang memiliki tingkat kejernihan tinggi, bebas..",
    },
    {
      id: 5,
      name: "RBD Palm Stearin",
      image: "/images/1061729630_RBD_PS.webp",
      description:
        "RBD Palm Stearin merupakan fraksi padat hasil pemisahan minyak sawit setelah proses refining, yang..",
    },
    {
      id: 6,
      name: "Minyak Industri (Industrial Palm Oil)",
      image: "/images/1044266343_palm-oil.webp",
      description:
        "Minyak Industri adalah produk olahan minyak sawit non-food grade yang digunakan di berbagai sektor..",
    },
  ];

  return (
    <section
      id="produk"
      className="py-16 bg-gradient-to-r from-green-900 to-primary-light"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Produk Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-center text-primary">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {product.description}
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=62881010718595&text=Hallo+PT%20Singosari%20Gulden%20Sejahtera,+saya+mau+Konsultasi+${encodeURIComponent(
                    product.name
                  )}`}
                  className="block w-full text-center btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="inline-block w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
