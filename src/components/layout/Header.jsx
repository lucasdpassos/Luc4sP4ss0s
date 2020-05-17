import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import logotipo from './images/logotipo.png';
import fire from './images/fire.png';
import water from './images/water.png';

const Header = () => {
    return (
        <HeaderArea>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logotipo} alt='logo' className='logotipo' />
                    </Link>
                </div>
                 <h2 className='selectText'>Selecione a Loja:</h2>                           
                <nav>
                    <ul className='lojas'>
                        <li>
                            <Link to='/fire'>
                                <img src={fire} alt='fire' className='firelogo'  />
                            </Link>
                        </li>
                        <li>
                            <Link to='/water'>
                                <img src={water} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;