import Products from "@/components/header/Products";
import Banner from "@/components/header/Banner";
import { ProductProp } from "../../type";

interface Props{
  productData:ProductProp
}

export default function  Home({productData}:Props){
  
     
  
  return (
    <main>
      <div className=" max-w-screen-3xl mx-auto">
        {" "}
        <Banner />
        <div className="relative first-line:md:-mt-20 lg:-mt-32 xl:-mt-60 z-20 mb-10">
        <Products productData= {productData}/>
        </div>
        
      </div>
    </main>
  );
}

//SSR for data fetching

export const getServerSideProps   = async() => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();

  return { props:{ productData }};
};
