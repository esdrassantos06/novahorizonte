import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import fotohomem1 from '../assets/images/equipa/homem1.jpg'
import fotohomem2 from '../assets/images/equipa/homem2.webp'
import fotohomem3 from '../assets/images/equipa/homem3.webp'
import fotohomem4 from '../assets/images/equipa/homem4.webp'
import { useState } from 'react'



const Equipa = () => {
    const [startIndex, setStartIndex] = useState(0)

    const equipa = [
        {
            nome: 'João Silva',
            cargo: 'Trabalhador',
            foto: fotohomem1,
        },
        {
            nome: 'José Santos',
            cargo: 'Engenheiro Civil',
            foto: fotohomem2,
        },
        {
            nome: 'Pedro Almeida',
            cargo: 'Designer de Interiores',
            foto: fotohomem3,
        },
        {
            nome: 'Mohammed Ali',
            cargo: 'Gerente de Marketing',
            foto: fotohomem4,
        },
    ]


    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % equipa.length)
    }

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + equipa.length) % equipa.length)
    }

    const visibleMembers = [...equipa.slice(startIndex), ...equipa.slice(0, startIndex)]
        .slice(0, 3)

    // Faz aparecer só 3 funcionários por vez

    return (
        <div className='equipa-container relative flex gap-4'>

            <div className='prev-button flex items-center justify-center mr-2'>
                <button
                    onClick={handlePrev}
                    className='bg-primary/50 outline-text/20 outline hover:bg-primary/70 cursor-pointer p-2 rounded-lg'
                >
                    <ArrowLeft size={25} color='#fff' />
                </button>
            </div>

            <div className='flex gap-4'>
                {visibleMembers.map((membro, index) => (
                    <div key={index} className='membro  flex text-text flex-col items-center gap-2'>
                        <img
                            src={membro.foto}
                            className='w-82.5 h-94 select-none rounded-lg object-cover'
                            alt={membro.nome}
                        />
                        <div className='flex flex-col'>
                            <h3 className='text-lg circularBold'>{membro.nome}</h3>
                            <p className='text-base titilliumRegular'>{membro.cargo}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='next-button ml-2 flex items-center justify-center'>
                <button
                    onClick={handleNext}
                    className='bg-primary/50 outline-text/20 outline hover:bg-primary/70 cursor-pointer p-2 rounded-lg'
                >
                    <ArrowRight size={25} color='#fff' />
                </button>
            </div>

        </div>
    )
}

export default Equipa
