import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { bug, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water } from './images/icons/iconsindex';
import './headerstyle.css'

const Header = () => {
    return (
        <HeaderArea>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <img src='' alt='logo' className='logotipo' />
                    </Link>
                </div>
                 <h2 className='selectText'>Selecione a Loja:</h2>                           
                <nav>
                    <ul className='tipos'>
                        <li>
                            <Link to='/bug'>
                                <img src={bug} alt='fire' className='firelogo'  />
                            </Link>
                        </li>
                        <li>
                            <Link to='/dragon'>
                                <img src={dragon} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/electric'>
                                <img src={electric} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/fairy'>
                                <img src={fairy} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/fighting'>
                                <img src={fighting} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/fire'>
                                <img src={fire} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/flying'>
                                <img src={flying} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/ghost'>
                                <img src={ghost} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/grass'>
                                <img src={grass} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/ground'>
                                <img src={ground} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/ice'>
                                <img src={ice} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/normal'>
                                <img src={normal} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/poison'>
                                <img src={poison} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/psychic'>
                                <img src={psychic} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/rock'>
                                <img src={rock} alt='water' className='waterlogo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/steel'>
                                <img src={steel} alt='water' className='waterlogo' />
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