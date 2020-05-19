
/* Lucas: Criei as Routes dos tipos de pokémon desta maneira para que cada lista de pokémon fosse impressa para o usuário da maneira mais detalhista possível.
Dessa forma, a longo prazo na aplicação, cada página de cada tipo diferente poderia receber atributos únicos, melhorando a experiência do usuário, como por exemplo: um background
diferente para cada uma, uma frase ou um recado.
*/


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bug from './components/layout/pages/Bug'
import Dragon from './components/layout/pages/Dragon'
import Electric from './components/layout/pages/Electric'
import Fairy from './components/layout/pages/Fairy'
import Fighting from './components/layout/pages/Fighting'
import Fire from './components/layout/pages/Fire'
import Flying from './components/layout/pages/Flying'
import Ghost from './components/layout/pages/Ghost'
import Grass from './components/layout/pages/Grass'
import Ground from './components/layout/pages/Ground'
import Ice from './components/layout/pages/Ice'
import Normal from './components/layout/pages/Normal'
import Poison from './components/layout/pages/Poison'
import Psychic from './components/layout/pages/Psychic'
import Rock from './components/layout/pages/Rock'
import Steel from './components/layout/pages/Steel'
import Water from './components/layout/pages/Water'

export default () => {
    return (
        <Switch>
            <Route exact path='/bug'>
                <Bug />
            </Route>
            <Route exact path='/dragon'>
                <Dragon />
            </Route>
            <Route exact path='/electric'>
                <Electric />
            </Route>
            <Route exact path='/fairy'>
                <Fairy />
            </Route>
            <Route exact path='/fighting'>
                <Fighting />
            </Route>
            <Route exact path='/fire'>
                <Fire />
            </Route>
            <Route exact path='/flying'>
                <Flying />
            </Route>
            <Route exact path='/ghost'>
                <Ghost />
            </Route>
            <Route exact path='/grass'>
                <Grass />
            </Route>
            <Route exact path='/ground'>
                <Ground />
            </Route>
            <Route exact path='/ice'>
                <Ice />
            </Route>
            <Route exact path='/normal'>
                <Normal />
            </Route>
            <Route exact path='/poison'>
                <Poison />
            </Route>
            <Route exact path='/psychic'>
                <Psychic />
            </Route>
            <Route exact path='/rock'>
                <Rock />
            </Route>
            <Route exact path='/steel'>
                <Steel />
            </Route>            
            <Route exact path='/water'>
                <Water />
            </Route>            
        </Switch>
    );
}