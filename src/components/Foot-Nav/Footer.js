import img1 from "../../Assets/zara.png";
import img2 from "../../Assets/pose.jpg";
import img3 from "../../Assets/lacoste.png";
import img4 from "../../Assets/khatos.jpg";
import img5 from "../../Assets/suhasini.png";
import img6 from "../../Assets/logo7.png";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaSnapchatSquare,
} from "react-icons/fa";
import amp from "../../Assets/Amazonpay.webp";
import php from "../../Assets/phonpay.png";
import gay from "../../Assets/gpay.png";
import app from "../../Assets/ApplePay.png";
import alipay from "../../Assets/alipay.png";
import bitcoin from "../../Assets/bitcoin.avif";
import epay from "../../Assets/epay.png";
import wes from "../../Assets/westernunionpay.png";

const Footer = () => {
  return (
    <footer className="bg-green-50 py-8">
      <div className="container flex flex-col mx-auto px-4">
        <h2 className="text-xl text-center  font-semibold mb-4">
          BRANDS FOR YOU
        </h2>
        <div className="flex flex-wrap justify-center px-4 h-4">
          <img src={img1} alt="Logo1" className="h-10 mx-2" />
          <img src={img2} alt="Logo2" className="h-10 mx-2" />
          <img src={img3} alt="logo3" className="h-10 mx-2" />
          <img src={img4} alt="Logo4" className="h-10 mx-2" />
          <img src={img5} alt="Logo5" className="h-10 mx-2" />
          <img src={img6} alt="Logo6" className="h-10 mx-2" />
        </div>

        <div className="flex flex-wrap justify-between pt-8 items-center">
          <div className="w-full lg:w-auto mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">COMPANY INFO</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Social Responsibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Fashion Blogger
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-auto  mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">HELP & SUPPORT</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  How to Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  How to Track
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Size Chart
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-auto mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">CUSTOMER CARE</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Bonus Point
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="w-full lg:w-auto h-auto mb-6 pt-8 lg:mb-0">
              <h2 className="text-xl font-semibold mb-4">FOLLOW US</h2>
              <div className="flex gap-1 space-x-4">
                <a href="#">
                  <FaInstagramSquare />
                </a>
                <a href="#">
                  <FaTwitterSquare />
                </a>
                <a href="#">
                  <FaFacebookSquare />
                </a>
                <a href="#">
                  <FaWhatsappSquare />
                </a>
                <a href="#">
                  <FaSnapchatSquare />
                </a>
              </div>
            </div>

            <div className="w-full  lg:w-auto mb-6 lg:mb-0">
              <p>SINGNUP FOR TUSHAR'S SHOPPING STYLE NEWS </p>
              <h2 className="text-xl font-semibold mb-4">NEWSLETTER</h2>
              <form className="flex gap-2">
                <input
                  type="email"
                  className="p-2 w-full border border-gray-300 rounded"
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center mt-8"></div>

        <div className="flex flex-wrap justify-between items-center mt-8">
          <div className="w-full  mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">PAYMENT METHODS</h2>
            <div className="flex flex-wrap  space-x-4">
              <img src={epay} alt="eBay" className="h-8" />
              <img src={app} alt="Google Pay" className="h-8" />
              <img src={gay} alt="Apple Pay" className="h-8" />
              <img src={amp} alt="Amazon Pay" className="h-8" />
              <img src={php} alt="American Express" className="h-8 py-2" />
              <img src={alipay} alt="Alipay" className="h-8 py-2" />
              <img src={wes} alt="BitPay" className="h-8 py-2" />
              <img src={bitcoin} alt="Bitcoin" className="h-8 py-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
