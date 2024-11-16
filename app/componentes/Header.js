import Image from 'next/image';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-5 p-5 bg-green-50 shadow-md">
      <Image 
        src={logo} 
        width={300} 
        height={80} 
        alt="Logo de Carbo-NO" 
      />
      <nav className="w-full flex justify-around text-lg font-semibold text-black">
        <a href="#eco-hoteles" className="px-4 py-2 rounded-lg hover:bg-green-600 hover:text-green transition">Eco Hoteles</a>
        <a href="#eco-transporte" className="px-4 py-2 rounded-lg hover:bg-green-600 hover:text-green transition">Eco Transporte</a>
        <a href="#calculadora" className="px-4 py-2 rounded-lg hover:bg-green-600 hover:text-green transition">Calculadora</a>
        <a href="#betty-moda" className="px-4 py-2 rounded-lg hover:bg-green-600 hover:text-green transition">Betty Moda</a>
      </nav>
    </header>
  );
};

export default Header;
