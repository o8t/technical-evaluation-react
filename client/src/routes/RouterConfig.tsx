import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Clown } from '../pages';
import * as routes from './constants';

export function RouterConfig() {
    return (
        <div>
            <Switch>
                <Route exact path={routes.ROOT} component={Home} />
                <Route exact path={routes.CLOWNS} component={Clown} />
            </Switch>
        </div>
    );
}