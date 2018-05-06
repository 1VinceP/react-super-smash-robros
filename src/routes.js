import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home/Home';
import CreateCharacter from './views/CreateCharacter/CreateCharacter';
import Battle from './views/Battle/Battle';
import Help from './views/Help/Help';
import Glossary from './views/Glossary/Glossary';

export default (
    <Switch>
        
        <Route exact path='/' component={Home} />
        <Route path='/create-character' component={CreateCharacter} />
        <Route path='/battle' component={Battle} />
        <Route path='/help' component={Help} />
        <Route path='/glossary' component={Glossary} />

    </Switch>
)