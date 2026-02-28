import Image from "next/image";
import cm2 from "@/assets/cm2.jpeg";
import Nav from "../../components/Nav";

export default function HeroImgMid() {
  return (
    <section className="relative min-h-screen w-full bg-white text-black font-serif overflow-hidden">
      <Nav />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-24 pb-12">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-start space-y-8">
          {/* Small image */}
          <div className="w-full flex justify-center">
            <Image
              src={cm2}
              alt="Computer setup"
              width={300}
              height={150}
              className="rounded shadow-lg w-full sm:w-auto max-w-xs sm:max-w-sm"
            />
          </div>

          {/* Description text */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">
            The iconic multicoloured chevron pattern, among the many style
            prerogatives that have made the name famous over time, is
            transformed into a tiny succession of small polychrome
          </p>
          <div className="w-28 h-[2px] bg-teal-400 rounded-full" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-lg leading-tight text-rich-black">
            The disruptive philosophy of the new textile icon
          </h2>

          {/* CTA Button */}
          <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition">
            VIEW COLLECTION
          </button>
        </div>
      </div>

      {/* Background number */}
      <div className="absolute bottom-0 left-6 text-[10rem] text-orange-200 font-bold select-none opacity-20 hidden md:block">
        01
      </div>
    </section>
  );
}
