import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <header>
        <nav>
            <ul>
                <Link to={'/'}> Home</Link>
                <Link to={'/exposicoes'}> Exposições</Link>
                <Link to={'/sobre'}> Sobre</Link>
                <Link to={'/contato'}> Contato</Link>
             
                
            </ul>
        </nav>
    </header>


    ) 

        
    
}

export default Header;


