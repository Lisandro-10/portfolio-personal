import { RightArrow } from "@/assests/icons/right-arrow";
import cogImage from "@/assests/cog.png";
import cylinderImage from "@/assests/cylinder.png";
import noodleImgage from "@/assests/noodle.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="px-5 pt-8 pb-20 md:pt-5 md:pb-10 lg:px-40 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip ">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[65%]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] font-bold tracking-tight mt-6 lg:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <div className="h-5 w-5">
                  <RightArrow />
                </div>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImgage}
              width={220}
              height={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};