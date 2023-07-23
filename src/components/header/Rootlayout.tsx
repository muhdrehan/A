import react, { ReactElement } from "react";
import Header from "@/components/header/header";
import Bottomheader from "@/components/header/bottomheader";
import Footer from "@/components/header/Footer";
import { Carousel } from "react-responsive-carousel";
import Banner from "./Banner";

interface Props {
  children: ReactElement;
}

const Rootlayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Bottomheader />

      {children}

      <Footer />
    </>
  );
};

export default Rootlayout;
