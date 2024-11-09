import { Span } from "next/dist/trace"
import Image from 'next/image'
import logo from '../img/logo.png'
const Header = () => {
    return(
        <div className='menu'>
            <Image
                src={logo}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div>
                <span>Eco Hoteles</span>
                <span>Eco Trensporte</span>
                <span>Calculadora</span>
                <span>Betty Moda</span>
            </div>
            
            
        </div>
    )
}

export default Header