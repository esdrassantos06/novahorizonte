import agaKhan from '../assets/premios/aga-khan.png'
import mipim from '../assets/premios/mipim.png'
import pritz from '../assets/premios/pritzker.png'
import riba from '../assets/premios/riba.png'
import breeam from '../assets/premios/breeam.svg'
import ipa from '../assets/premios/ipa.png'
import europanostra from '../assets/premios/europanostra.png'
import miesarch from '../assets/premios/miesarch.png'

const ScrollComponent = () => {
    const images = [
        { src: agaKhan, alt: 'Prêmio Aga Khan de Arquitetura' },
        { src: mipim, alt: 'Prêmio MIPIM de Inovação' },
        { src: pritz, alt: 'Prêmio Pritzker de Arquitetura' },
        { src: riba, alt: 'Prêmio RIBA de Arquitetura' },
        { src: breeam, alt: 'Prêmio BREEAM de Sustentabilidade' },
        { src: ipa, alt: 'Prêmio IPA de Arquitetura' },
        { src: europanostra, alt: 'Prêmio Europeu de Arquitetura' },
        { src: miesarch, alt: 'Prêmio Mies van der Rohe de Arquitetura' },
    ];


    return (
        <div className='slider' style={{
            '--width': '100px', '--height': '70px', '--quantity': '8'}}>

            <div className="list">


                {images.map((image, index) => (
                    <div key={index} style={{ '--position': index + 1 }} className='item'>
                        <img

                            src={image.src}
                            alt={image.alt}
                            className="image-scroll"
                        />
                    </div>
                ))}


            </div>
            
        </div>
    )

}

export default ScrollComponent
