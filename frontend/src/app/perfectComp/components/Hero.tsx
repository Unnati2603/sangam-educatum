import Image from "next/image";
import cm from "@/assets/cm.jpeg";
import cm2 from "@/assets/cm2.jpeg";
import Nav from "./Nav";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen bg-white text-black font-serif overflow-hidden">
      <Nav />

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen px-6 md:px-12 pt-24 pb-12 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-8 overflow-y-auto">
          {/* Top Text and Image */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-start space-x-4">
          <Image
            src={cm2}
                alt="Closeup"
                width={240}
                height={280}
                className="object-cover rounded shrink-0"
          />
            <p className="text-sm md:text-base text-yinmn-blue ">
              Your one-stop destination for comprehensive computer solutions. We service PCs, laptops, security cameras, and provide premium hardware accessories.
            </p>
            </div>
            <div className="w-60 h-[2px] bg-silver-lake rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-rich-black leading-snug tracking-tight">
            Perfect Computer Services
          </h2>

          {/* View Collection Button */}
          <Button href="#services">
            OUR SERVICES
          </Button>

        </div>

        {/* Right side big image */}
        <div className="relative h-full w-full flex items-center justify-center">
          <Image
            src={cm}
            alt="Main model"
            fill
            className="object-cover rounded-md"
          />

          <div className="absolute right-0 bottom-10 text-xs tracking-widest rotate-90 origin-bottom-right text-gray-600">
            LOOK TO GO
          </div>
        </div>
      </div>

      {/* Background number */}
      <div className="absolute bottom-0 left-6 text-[10rem] text-orange-200 font-bold select-none opacity-20 hidden md:block">
        01
      </div>
    </section>
  );
}
