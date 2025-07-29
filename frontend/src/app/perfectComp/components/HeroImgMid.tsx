import Image from "next/image";
import cm from "@/assets/cm.jpeg";
import cm2 from "@/assets/cm2.jpeg";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-screen bg-white text-black font-serif overflow-hidden">
      <Nav />

      {/* Main grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen px-6 md:px-12 pt-24 pb-12 gap-12 relative">
        {/* Small image - centered on top, overlapping both sides */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
          <Image
            src={cm2}
            alt="Small image"
            width={300}
            height={150}
            className="rounded shadow-lg"
          />
        </div>

        {/* Left side text */}
        <div className="flex flex-col justify-center items-start space-y-6 pt-32 md:pt-44">
          <p className="text-xs text-gray-600 leading-snug max-w-sm">
            The iconic multicoloured chevron pattern, among the many style
            prerogatives that have made the name famous over time, is
            transformed into a tiny succession of small polychrome
          </p>
          <div className="w-28 h-[2px] bg-teal-400 rounded-full" />

          <h2 className="text-5xl md:text-6xl font-semibold max-w-lg leading-tight">
            The disruptive philosophy of the new textile icon
          </h2>

          <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition">
            VIEW COLLECTION
          </button>
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
