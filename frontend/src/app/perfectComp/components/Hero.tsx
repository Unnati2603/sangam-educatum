import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import cm from "@/assets/cm.jpeg";
import cm2 from "@/assets/cm2.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white text-black font-serif overflow-hidden">
      {/* Transparent Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 md:px-12 py-6 bg-white/10 backdrop-blur-md">
        <h1 className="text-xl font-bold">sukabeli.</h1>
        <div className="flex items-center space-x-4 text-black">
          <Menu className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
        </div>
      </nav>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 py-28 md:py-36 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-10">
          {/* Top Text and Image */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-start space-x-4">
              <Image
                src={cm2}
                alt="Closeup"
                width={96}
                height={80}
                className="object-cover rounded"
              />
              <p className="text-xs text-gray-600 leading-snug">
                The iconic multicoloured chevron pattern, among the many style
                prerogatives that have made the name famous over time, is
                transformed into a tiny succession of small polychrome
              </p>
            </div>
            <div className="w-28 h-[2px] bg-teal-400 rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl font-semibold max-w-lg leading-tight">
            The disruptive philosophy of the new textile icon
          </h2>

          {/* View Collection Button */}
          <button className="w-fit px-6 py-3 bg-black text-white rounded-full font-medium text-sm tracking-wide hover:bg-neutral-900 transition">
            VIEW COLLECTION
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center relative">
          <Image
            src={cm}
            alt="Model"
            width={768}
            height={512}
            className="rounded-md object-cover max-w-full md:max-w-md"
          />
          {/* Vertical Text */}
          <div className="absolute right-0 bottom-10 text-xs tracking-widest rotate-90 origin-bottom-right text-gray-600">
            LOOK TO GO
          </div>
        </div>
      </div>

      {/* Decorative Number */}
      <div className="absolute bottom-0 left-6 text-[10rem] text-orange-200 font-bold select-none opacity-20 hidden md:block">
        03
      </div>
    </section>
  );
}
