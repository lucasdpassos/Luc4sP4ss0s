import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Fire from './components/layout/pages/Fire';
import Water from './components/layout/pages/Water';

export default () => {
    return (
        <Switch>
            <Route exact path='/fire'>
                <Fire />
            </Route>
            <Route exact path='/water'>
                <Water />
            </Route>
        </Switch>
    );
}