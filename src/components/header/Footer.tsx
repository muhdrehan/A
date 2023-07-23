import Image from "next/image";
import Logo from "@/images/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <Image className="w-24" src={Logo} alt="Logo" />
      <p className="text-sm -mt-full">
        {" "}
        All rights reserved{" "}
        <a className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" href="https://portfolio-6wr3519vc-muhdrehan.vercel.app/" target="_blank"> </a>
      </p>
    </div>
  );
};

export default Footer;
