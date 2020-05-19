/* Lucas: usei o styled-components para fazer a edição do Template, a vantagem do styled-components é que você já exporta o seu componente com
elementos de design utilizando o styled.<tag> 
 */

import styled from 'styled-components';
import pokeballbg from './layout/images/bg/pokeballbg.png'

export const Template = styled.div`
    background-image: url(${pokeballbg});
`;

