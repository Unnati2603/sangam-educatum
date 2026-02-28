import Image from "next/image";
import cm from "@/assets/cm.jpeg";
import cm2 from "@/assets/cm2.jpeg";
import Button from "../../components/Button";
import Nav from "../../components/Nav";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-white text-black font-serif overflow-hidden">
      <Nav />

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen px-6 md:px-12 pt-24 pb-12 gap-8 lg:gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Heading - shown first on mobile, back in normal flow on lg */}
          <h2 className="order-first lg:order-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-rich-black tracking-tight">
            Perfect Computer Services
          </h2>

          {/* Image + Description */}
          <div className="order-2 lg:order-none flex flex-col sm:flex-row sm:items-center items-start gap-6 w-full">
            <Image
              src={cm2}
              alt="Computer setup"
              width={280}
              height={200}
              className="object-cover rounded w-full sm:w-60 md:w-72 shrink-0"
            />
            <p className="text-sm md:text-base text-yinmn-blue leading-relaxed max-w-sm">
              Your one-stop destination for comprehensive computer solutions. We
              service PCs, laptops, security cameras, and provide premium
              hardware accessories.
            </p>
          </div>

          {/* Divider */}
          <div className="order-3 lg:order-none w-40 sm:w-60 h-[2px] bg-silver-lake rounded-full" />

          {/* CTA Button */}
          <div className="order-4 lg:order-none">
            <Button href="#services">OUR SERVICES</Button>
          </div>
        </div>

        {/* Right side big image - hidden on mobile, visible on lg+ */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[400px]">
          <Image
            src={cm}
            alt="Computer services"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>

      {/* removed as was overlapping a lot */}
      {/* Background number */}
      {/* <div className="absolute bottom-0 left-6 text-[10rem] text-orange-200 font-bold select-none opacity-20 hidden md:block">
        01
      </div> */}
    </section>
  );
}
