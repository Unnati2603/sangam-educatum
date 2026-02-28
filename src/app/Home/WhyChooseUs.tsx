"use client";

import { Users, Zap, Package, DollarSign, Award, Shield } from "lucide-react";

interface ChooseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ChooseCard({ title, description, icon }: ChooseCardProps) {
  return (
    <div className="p-8 bg-oxford-blue/20 hover:bg-yinmn-blue/30 backdrop-blur-sm rounded-xl border border-silver-lake/20 hover:border-yinmn-blue/40 transition-all duration-300 ease-in-out group">
      <div className="mb-6">
        <div className="p-4 bg-yinmn-blue rounded-lg text-platinum w-fit group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-rich-black group-hover:text-silver-lake transition-colors mb-3">
          {title}
        </h3>
      </div>

      <p className="text-sm text-oxford-blue leading-relaxed group-hover:text-platinum transition-colors">
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experienced Technicians",
      description:
        "35+ years of combined experience in computer repairs. Our skilled team has handled thousands of cases with expertise and professionalism.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Fast Service",
      description:
        "Same-day or next-day repairs for most issues. We understand your time is valuable and work efficiently without compromising quality.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "High-Quality Parts",
      description:
        "Only genuine and reliable components used in repairs. We source from trusted manufacturers to ensure longevity and performance.",
      icon: <Package className="w-8 h-8" />,
    },
    {
      title: "Affordable & Transparent Pricing",
      description:
        "No hidden charges. We provide detailed quotations upfront and discuss costs before proceeding with any repair work.",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      title: "Trusted by Local Businesses",
      description:
        "Preferred service provider for homes, offices, and businesses in the region. Strong reputation built on consistent quality and reliability.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Warranty on Repairs",
      description:
        "All repairs come with warranty coverage. We stand behind our work and ensure your satisfaction and device reliability.",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-rich-black mb-4">
            Why Choose Perfect Computer Services?
          </h2>
          <p className="text-oxford-blue max-w-2xl mx-auto text-lg">
            We&apos;re not just another repair shop. Here&apos;s what sets us
            apart and why customers trust us with their most important devices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <ChooseCard
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>

        {/* Trust Statement */}
        {/* <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-yinmn-blue/20 to-oxford-blue/20 rounded-xl border border-yinmn-blue/30 text-center">
          <p className="text-silver-lake text-lg leading-relaxed max-w-3xl mx-auto">
            When you bring your device to Perfect Computer Services, you&apos;re not just getting a repair—
            you&apos;re getting the benefit of years of experience, honest service, and genuine care. 
            We treat every device like it&apos;s our own and every customer like family.
          </p>
        </div> */}
      </div>
    </section>
  );
}
