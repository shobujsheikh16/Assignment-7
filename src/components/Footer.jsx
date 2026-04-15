const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        {/* Title */}
        <h2 className="text-5xl font-bold mb-4">
          KeenKeeper
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="mb-3 text-lg">Social Links</h3>

        <div className="flex justify-center gap-4 mb-8">

          {/* Instagram */}
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              className="w-5 h-5"
              alt="instagram"
            />
          </div>

          {/* Facebook */}
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              className="w-5 h-5"
              alt="facebook"
            />
          </div>

          {/* Twitter / X */}
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
              className="w-5 h-5"
              alt="twitter"
            />
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-green-700 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-300">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:underline">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:underline">
              Cookies
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;