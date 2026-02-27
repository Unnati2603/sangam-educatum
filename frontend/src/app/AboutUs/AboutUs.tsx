"use client";

import Image from "next/image";
import { Target, Eye, Gem } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-rich-black">
      <div className="max-w-7xl mx-auto">
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-platinum mb-6">
              Who are we?
            </h2>
            <p className="text-silver-lake text-lg leading-relaxed mb-6">
              Perfect Computer Services is a computer repair and hardware
              solutions provider with 35+ years of experience serving homes and
              businesses. We specialize in PC & laptop repairs, CCTV
              installation, and high-quality computer accessories.
            </p>
            <p className="text-silver-lake text-lg leading-relaxed mb-6">
              Our goal is simple : deliver fast, honest, and reliable service at
              fair prices. With deep-rooted connections in the community,
              we&apos;ve built trust through years of dedicated service and
              customer care.
            </p>
          </div>

          {/* Founder Section */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-6 rounded-lg overflow-hidden border-2 border-yinmn-blue">
              {/* Placeholder image - user will replace with actual image */}
              <Image
                src="/api/placeholder/300/300"
                alt="Mr. Ajit Chaurasia - Founder"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-platinum mb-2">
              Mr. Ajit Chaurasia
            </h3>
            <p className="text-yinmn-blue font-semibold mb-4">
              Founder & Owner
            </p>
            {/* <p className="text-silver-lake text-center max-w-xs">
              With decades of expertise in computer repair in tandem with hardware and software solutions, Mr. Chaurasia founded 
              Perfect Computer Services with a mission to provide honest, reliable, and affordable service to the community.
            </p> */}
          </div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-platinum text-center mb-12">
            Our Mission, Vision & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-8 bg-oxford-blue/20 backdrop-blur-sm rounded-xl border border-silver-lake/20 hover:border-yinmn-blue/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yinmn-blue rounded-lg text-platinum">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-platinum">
                  Our Mission
                </h3>
              </div>
              <p className="text-platinum leading-relaxed">
                To deliver reliable, affordable, and honest computer solutions
                that empower our customers and their businesses.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-oxford-blue/20 backdrop-blur-sm rounded-xl border border-silver-lake/20 hover:border-yinmn-blue/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yinmn-blue rounded-lg text-platinum">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-platinum">
                  Our Vision
                </h3>
              </div>
              <p className="text-platinum leading-relaxed">
                To become the most trusted and preferred computer service
                provider in the region, recognized for our integrity, expertise,
                and customer-centric approach.
              </p>
            </div>

            {/* Core Values */}
            <div className="p-8 bg-oxford-blue/20 backdrop-blur-sm rounded-xl border border-silver-lake/20 hover:border-yinmn-blue/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yinmn-blue rounded-lg text-platinum">
                  <Gem className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-platinum">
                  Core Values
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-silver-lake text-sm">
                  <span className="text-yinmn-blue font-bold">•</span>
                  <span>
                    <span className="text-platinum font-semibold">Quality</span>
                  </span>
                </li>
                <li className="flex items-center space-x-2 text-silver-lake text-sm">
                  <span className="text-yinmn-blue font-bold">•</span>
                  <span>
                    <span className="text-platinum font-semibold">Trust</span>
                  </span>
                </li>
                <li className="flex items-center space-x-2 text-silver-lake text-sm">
                  <span className="text-yinmn-blue font-bold">•</span>
                  <span>
                    <span className="text-platinum font-semibold">
                      Reliability
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-2 text-silver-lake text-sm">
                  <span className="text-yinmn-blue font-bold">•</span>
                  <span>
                    <span className="text-platinum font-semibold">
                      Customer-first
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
