import React from 'react';
import {Route} from 'react-router-dom';
import {IRoute} from './config';

const RouteWithSubRoutes = (route: IRoute) => {

    return (
    <route.layout>
      <Route
        path={route.path}
        render={(props: any) =>
            route.component && <route.component {...props} routes={route.routes} />
        }
      />
    </route.layout>
  );
};

export default RouteWithSubRoutes;
