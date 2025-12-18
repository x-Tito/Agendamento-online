import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa6'
import './Footer.css'

function Footer() {
    return(<footer className='footer'>
        <ul>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaWhatsapp/>
            </li>
        </ul>
        <p className='copy_rigth'><span>Copyright</span> &copy; 2025 x-Tito.Todos os Direitos Reservados.</p>
    </footer>)
}

export default Footer;