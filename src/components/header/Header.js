'use strict';
import './Header.css';

const Header = () => {
    return (
        
        <header>
            <div className='headerName'>RESTy</div>
            <div class="topnav">
                <a href="#home">Home</a>
                <a href="#news">History</a>
                <a href="#contact">Help</a>
                
            </div>
        </header>
    );
}
export default Header;