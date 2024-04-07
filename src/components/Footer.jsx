import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <footer className="border border-t-8 border-teal-500 py-8 bg-gray-100 rounded-2xl">
      <div className="container justify-center  mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-sm sm:text-xl font-semibold text-green-900"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-green-900 via-green-700 to-green-400 rounded-lg text-white">
                LUXEMART
              </span>{" "}
              Super
            </Link>
          </div>
          <div></div>
          <div className="flex flex-row justify-end gap-4 md:gap-8 text-gray-900 items-end lg-flex-col ">
            <div className="ml-auto">
              <h3 className="font-semibold">About</h3>
              <ul >
                <li className="hover:text-green-500">
                  <a
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Company
                  </a>
                </li>
                <li className="hover:text-green-500">
                  <a
                    href="/luxemart" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   Luxemart Super
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Follow us</h3>
              <ul >
                <li className="hover:text-green-500">
                  <a
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li className="hover:text-green-500">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul>
                <li className="hover:text-green-500">
                  <a href="/privacy-policy">Privacy Policy</a> 
                </li>
                <li className="hover:text-green-500">
                  <a href="/terms">Terms & Conditions</a> 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <div className="flex justify-center items-center">
          <span className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()}  Luxemart Super
          </span>
          <div className="flex gap-6 ml-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a href="https://instagram.com">
              <BsInstagram />
            </a>
            <a href="https://twitter.com">
              <BsTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a href="https://dribbble.com">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
