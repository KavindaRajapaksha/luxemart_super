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
    <footer className="border border-t-8 border-teal-500 py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                KOLOGIC
              </span>{" "}
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 className="font-semibold">About</h3>
              <ul>
                <li>
                  <a
                    href="/post/kologic-technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Company
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
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
              <ul>
                <li>
                  <a
                    href="https://github.com/KavindaRajapaksha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61553784651577"
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
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <div className="flex justify-center items-center">
          <span className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} KOLOGIC Blog
          </span>
          <div className="flex gap-6 ml-8">
            <a
              href="https://www.facebook.com/profile.php?id=61553784651577"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a
              href="https://github.com/KavindaRajapaksha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a href="#">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
