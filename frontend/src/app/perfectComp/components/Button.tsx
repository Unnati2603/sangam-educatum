interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-fit px-6 py-3 bg-rich-black text-white rounded-full font-medium text-sm tracking-wide hover:bg-yinmn-blue transition ${className}`}
    >
      {children}
    </button>
  );
}
