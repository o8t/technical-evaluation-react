import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ListClowns, ClownDetails } from '../pages';

export function RouterConfig() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={ListClowns} />
                <Route path={'/clown/:id'} component={ClownDetails} />
                <Route exact path={'/clown/'} component={ClownDetails} />
            </Switch>
        </div>
    );
}