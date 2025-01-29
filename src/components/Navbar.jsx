import { Link, useLocation } from 'react-router-dom'
/* Link para facilitar o redirecionamento */

/* 

useLocation está sendo usado para localizar onde o url da página está e modificar a cor do link para text-secondary e tirar o hover do underline

Ex: Quando você sai da página home e vai para "quem somos", a cor do quem somos muda para laranja e o underline aparece sem precisar fazer hover

*/
import image from '../assets/favicon/Favicon.png'

// Para a navbar, irei utilizar a fonte titillium

const Navbar = () => {
    const location = useLocation();

    return (
        <header className='bg-primary flex fixed top-0 w-full z-50'>
            <nav className='flex w-full items-center justify-between'>
                <Link to='/' className='select-none -space-y-3 ml-10 mb-1 flex flex-col items-center'>
                    <img src={image} className='w-14 select-none h-14 object-contain' alt='Logo' />
                    <div className='flex select-none flex-col items-center -space-y-1'>
                        <p className='montserrat select-none text-xs'>Construtora</p>
                        <p className='montserrat select-none text-nowrap text-sm font-bold'>Nova Horizonte</p>
                    </div>
                </Link>
                <ul className='flex titilliumSemiBold space-x-5'>
                    <li className={`${location.pathname === '/' ? 'text-secondary underline' : 'text-white hover:underline'} underline-offset-5 decoration-2 decoration-secondary transition-all duration-300`}>
                        <Link translate='no' to='/'>Home</Link>
                    </li>
                    <li className={`${location.pathname === '/quem-somos' ? 'text-secondary underline' : 'text-white hover:underline'} underline-offset-5 decoration-2 decoration-secondary transition-all duration-300`}>
                        <Link to='/quem-somos'>Quem somos</Link>
                    </li>
                    <li className={`${location.pathname === '/obras' ? 'text-secondary underline' : 'text-white hover:underline'} underline-offset-5 decoration-2 decoration-secondary transition-all duration-300`}>
                        <Link to='/obras'>Obras em Destaque</Link>
                    </li>
                    <li className={`${location.pathname === '/servicos' ? 'text-secondary underline' : 'text-white hover:underline'} underline-offset-5 decoration-2 decoration-secondary transition-all duration-300`}>
                        <Link to='/servicos'>Nossos Serviços</Link>
                    </li>
                </ul>
                <Link className='text-white titilliumBold mr-10 cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-amber-700 bg-secondary' to='/contact'>Contacte-nos</Link>
            </nav>
        </header>

    )
}

export default Navbar