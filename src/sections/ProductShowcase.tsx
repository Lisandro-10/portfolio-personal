import productImage from "@/assests/product-image.png";
import pyramidImage from "@/assests/pyramid.png";
import tubeImage from "@/assests/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 overflow-x-clip">
      <div className="header-container">
        <div className="md:section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track your progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            Saas website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="Pyramide Image"
            className="hidden md:block absolute -right-36 -top-32 w-[270px] lg:w-[300px]"
          />
          <Image
            src={tubeImage}
            alt="tube Image"
            className="hidden md:block absolute bottom-24 -left-36 w-[248px] lg:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};
