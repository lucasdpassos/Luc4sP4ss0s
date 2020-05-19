import React from 'react';
import { Link } from 'react-router-dom';

import { bug, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water } from './images/icons/iconsindex';
import trainer1 from './images/trainers/trainer1.png'
import trainer2 from './images/trainers/trainer2.png'
import dialogo from './images/trainers/dialogo.png'
import minidial from './images/trainers/minidial.png'
import './headerstyle.css'



/* Lucas: Eu estruturei o logotipo, as imagens dos treinadores, as caixas de diálogo e os ícones no Photoshop, para que o design da aplicação ficasse 
personalizado com as cores da empresa, que mapeei pelo site oficial.
*/


const Header = () => {  
    return (
            <div className='container is-desktop has-background-colour-dark'>
                 <div id='trainers' className='container level is-mobile'>
                      <img className='trainer1 level-left' src={trainer1} />
                      <img id='dial' className='dial level-right' src={dialogo} />                  
                      <img className='trainer2 level-right is-desktop' src={trainer2} />
                      <img id='minidial' className='minidial' src={minidial} />
                      
                      
                 </div>    
                <div className='container is-desktop has-background-grey' style={{marginBottom:'5%'}}>
                    <div className='columns is-mobile image is-60x60'>
                   
                     <div className='column'>
                        <li>
                            <Link to='/bug'>
                                <img src={bug} alt='fire' className='logo'  />
                            </Link>
                        </li>
                        <li>
                            <Link to='/dragon'>
                                <img src={dragon} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                        <div className='column'>
                        <li>
                            <Link to='/electric'>
                                <img src={electric} alt='water' className='logo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/fairy'>
                                <img src={fairy} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                        <div className='column'>
                        <li>
                            <Link to='/fighting'>
                                <img src={fighting} alt='water' className='logo' />
                            </Link>
                        </li>                       
                        <li>
                            <Link to='/fire'>
                                <img src={fire} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                        <div className='column'>
                        <li>
                            <Link to='/flying'>
                                <img src={flying} alt='water' className='logo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/ghost'>
                                <img src={ghost} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                        <div className='column'>
                        <li>                            
                            <Link to='/grass'>
                                <img src={grass} alt='water' className='logo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/ground'>
                                <img src={ground} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                        <div className='column'>
                        <li>
                            <Link to='/ice'>
                                <img src={ice} alt='water' className='logo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/normal'>
                                <img src={normal} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                        <div className='column'>
                        <li>
                            <Link to='/poison'>
                                <img src={poison} alt='water' className='logo' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/psychic'>
                                <img src={psychic} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                        <div className='column'>
                        <li>
                            <Link to='/rock'>
                                <img src={rock} alt='water' className='logo' />
                            </Link>
                        </li>                        
                        <li>
                            <Link to='/steel'>
                                <img src={steel} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                        <div className='column'>
                        <li>
                            <Link to='/water'>
                                <img src={water} alt='water' className='logo' />
                            </Link>
                        </li>
                        </div>
                    </div>
            </div>
           
            </div>
                
                
                
    )}

    
        export default Header;
    


























