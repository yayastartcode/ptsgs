const WhatsAppFloat = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=62881010718595&text=Hallo+PT%20Singosari%20Gulden%20Sejahtera"
      className="fixed bottom-8 right-8 z-50 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <img 
          src="/images/icons8-whatsapp.gif" 
          alt="WhatsApp"
          className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat dengan kami
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
