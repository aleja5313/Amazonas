import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import App from "../components/App";
import { Detalle } from '../components/Detalle';

import { Editar } from '../components/Editar';
import MapView from '../components/MapView';
import { RegProducto } from '../components/RegProducto';

export const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth"  component={App}/>
                <Route exact path="/auth/regproducto"  component={RegProducto}/>
                <Route exact path="/auth/editar"  component={Editar}/>
                <Route exact path="/auth/map"  component={MapView}/>
                <Route exact path="/auth/detalle"  component={Detalle}/>
                <Redirect to="/auth" />
            </Switch>
        </div>  
    )
}
