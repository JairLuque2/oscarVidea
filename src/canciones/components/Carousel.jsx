import './Carousel.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'


export const Carousel = () => {
    return (
        <div className='slider'>
            <ul>
                <li><img src={img1} alt="" /></li>
                <li><img src={img2} alt="" /></li>
                <li><img src={img3} alt="" /></li>
            </ul>
        </div>
    )
}
