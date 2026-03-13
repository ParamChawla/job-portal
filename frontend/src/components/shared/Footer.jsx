import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm text-gray-500">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            
            {/* Facebook */}
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.073C22 6.477 17.523 2 12 2S2 6.477 2 12.073c0 5.018 3.657 9.177 8.438 9.927v-7.03H7.898v-2.897h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.897h-2.33V22c4.78-.75 8.437-4.909 8.437-9.927z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149 4.916 4.916 0 003.195 9.72 4.903 4.903 0 01.964 9.1v.062a4.917 4.917 0 003.946 4.814 4.902 4.902 0 01-2.224.084 4.917 4.917 0 004.59 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.94v5.666H9.343V9h3.415v1.561h.048c.476-.9 1.637-1.852 3.368-1.852 3.6 0 4.267 2.369 4.267 5.455v6.288zM5.337 7.433a1.98 1.98 0 11.001-3.96 1.98 1.98 0 01-.001 3.96zM6.998 20.452H3.676V9h3.322v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .775 23.2 0 22.225 0z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;