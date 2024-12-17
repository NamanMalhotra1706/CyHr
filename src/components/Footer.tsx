import Link from "next/link";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            CyHr is the ultimate platform for connecting top cybersecurity talent with hiring managers in need of specialised skills. Whether you're a cybersecurity professional looking for your next opportunity or a hiring manager seeking to secure the best talent, CyHr makes the process efficient, secure, and simple.  
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#FeatureSection"
                className="hover:text-white transition-colors duration-300"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#About"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Team"
                className="hover:text-white transition-colors duration-300"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="#FAQ"
                className="hover:text-white transition-colors duration-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Chitkara University, Rajpura</p>
          <p>Punjab, India</p>
          <p>Email: </p>
          <p>Phone:</p>
        </div>
      </div>
      <Separator className="opacity-5" />
      <p className="text-center text-xs pt-8">
        © 2024 CyHr. All rights reserved. |{" "}
        <Link
          href="https://www.freeprivacypolicy.com/live/03720ab9-594f-4578-805d-94699aadfbf5"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          Privacy Policy
        </Link>{" "}
      </p>
    </footer>
  );
}

export default Footer;
