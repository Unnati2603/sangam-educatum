import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ children, onClick, href, className = '' }: ButtonProps) {
  const buttonClasses = `w-fit px-6 py-3 bg-rich-black text-white rounded-full font-medium text-sm tracking-wide hover:bg-yinmn-blue transition ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}
