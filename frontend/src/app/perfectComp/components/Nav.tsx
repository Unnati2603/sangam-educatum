import { Menu, ShoppingCart } from "lucide-react";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-white/10 backdrop-blur-sm">
      <h1 className="text-xl font-bold">sukabeli.</h1>
      <div className="flex items-center space-x-4 text-black">
        <Menu className="w-6 h-6" />
        <ShoppingCart className="w-6 h-6" />
      </div>
    </nav>
  );
}
