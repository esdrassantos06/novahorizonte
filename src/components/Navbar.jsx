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
        <header className='bg-primary flex fixed top-0 w-full h-20 z-50'>
            <nav className='flex w-full items-center justify-between'>
                <Link to='/' title='Construtora Nova Horizonte' className='select-none -space-y-3 ml-10 mb-1 flex flex-col items-center' aria-label='Ir para a página inicial'>
                    <img src={image} className='w-14 select-none h-14 object-contain' alt='Logo' />
                    <div className='flex select-none flex-col items-center -space-y-1'>
                        <p className='montserrat select-none text-xs'>Construtora</p>
                        <p className='montserrat select-none text-nowrap text-sm font-bold'>Nova <span className='text-secondary'>Horizonte</span></p>
                    </div>
                </Link>
                <ul className='flex titilliumSemiBold space-x-5'>
                    <li className={`${location.pathname === '/' ? 'text-secondary underline' : 'text-text hover:underline'} underline-offset-5 decoration-2 decoration-secondary transition-all duration-300`}>
                        <Link to='/' aria-label='Ir para a página inicial'>Home</Link>
                    </li>
                    <li className={`${location.pathname === '/quem-somos' ? 'text-secondary underline' : 'text-text hover:underline'} underline-offset-5 decoration-2 decoration-secondary transition-all duration-300`}>
                        <Link to='/quem-somos' aria-label='Ir para a página Quem Somos'>Quem somos</Link>
                    </li>
                    <li className={`${location.pathname === '/obras' ? 'text-secondary underline' : 'text-text hover:underline'} underline-offset-5 decoration-2 decoration-secondary transition-all duration-300`}>
                        <Link to='/obras' aria-label='Ir para a página Obras em Destaque'>Obras em Destaque</Link>
                    </li>
                    <li className={`${location.pathname === '/servicos' ? 'text-secondary underline' : 'text-text hover:underline'} underline-offset-5 decoration-2 decoration-secondary transition-all duration-300`}>
                        <Link to='/servicos' aria-label='Ir para a página Nossos Serviços'>Nossos Serviços</Link>
                    </li>
                </ul>
                <Link className='text-text titilliumBold mr-10 cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-amber-700 bg-secondary' to='/contact' aria-label='Ir para a página de contato'>
                    Contacte-nos
                </Link>
            </nav>
        </header>

    )
}

export default Navbar