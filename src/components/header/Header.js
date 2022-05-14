import './Header.scss';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        
        <header>
            <div className='headerName'>RESTy</div>
            <div class="topnav">
                <a href = "#b"><Link to="/">Home</Link></a>
                <a href = "#b"><Link to="/History">History</Link></a>
                
                
            </div>
        </header>
    );
}
export default Header;