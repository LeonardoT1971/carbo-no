import { Span } from "next/dist/trace"
import Image from 'next/image'
import logo from '../img/logo.png'
const Header = () => {
    return(
        <div className='flex flex-col items-center gap-5 p-5 bg-green-50'>
            <Image
                src={logo}
                width={300}
                height={500}
                alt="Picture of the author"
            />
            <div className="text-black w-4/5 flex justify-around">
                <span>Eco Hoteles</span>
                <span>Eco Trensporte</span>
                <span>Calculadora</span>
                <span>Betty Moda</span>
            </div>
            
            
        </div>
    )
}

export default Header