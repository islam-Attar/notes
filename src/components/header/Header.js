import './Header.scss';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        
        <header>
            <div className='headerName'>RESTy</div>
            <div class="topnav">
                <a><Link to="/">Home</Link></a>
                <a><Link to="/History">History</Link></a>
                
                
            </div>
        </header>
    );
}
export default Header;