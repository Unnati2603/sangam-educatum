import { Laptop, Monitor, Camera, Wrench, Shield, HardDrive, Printer, Mouse } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="p-6 bg-oxford-blue/20 hover:bg-yinmn-blue/30 backdrop-blur-sm rounded-xl border border-silver-lake/20 hover:border-silver-lake/40 transition-all duration-300 ease-in-out group">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-yinmn-blue rounded-lg text-platinum group-hover:text-silver-lake transition">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-platinum group-hover:text-silver-lake transition-colors">{title}</h3>
      </div>
      <p className="text-sm text-silver-lake leading-relaxed group-hover:text-platinum transition-colors">{description}</p>
    </div>
  );
}

export default function OurServices() {
  const services = [
    {
      title: "PC & Laptop Repairs",
      description: "Expert diagnosis and repair of hardware issues, component replacements, and performance optimization for all computer brands.",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Hardware Sales",
      description: "Quality computers, laptops, and accessories from trusted brands. Custom PC builds tailored to your needs.",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Camera Systems",
      description: "Installation, maintenance, and repair of security cameras and surveillance systems for homes and businesses.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Maintenance Services",
      description: "Regular maintenance, cleaning, and optimization to keep your devices running smoothly and prevent future issues.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Software Solutions",
      description: "OS installation, software updates, antivirus protection, and data backup services to keep your system secure.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "PC Parts",
      description: "Wide range of computer components including RAM, storage drives, processors, and motherboards for upgrades and repairs.",
      icon: <HardDrive className="w-6 h-6" />
    },
    {
      title: "Printer Services",
      description: "Printer setup, repair, and maintenance. Quality printer supplies and consumables available.",
      icon: <Printer className="w-6 h-6" />
    },
    {
      title: "Accessories",
      description: "High-quality keyboards, mice, headsets, webcams, and other peripherals to enhance your computing experience.",
      icon: <Mouse className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-rich-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-platinum mb-4">
            Our Services
          </h2>
          <p className="text-silver-lake max-w-2xl mx-auto">
            Comprehensive computer solutions for all your technology needs. From repairs to upgrades,
            we've got you covered with professional service and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
