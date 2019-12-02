import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
//import Landing from './Landing'

const Routes = () => {
    return (
        <section className='container'>

            <Switch>
                {/* <Route exact path='/Landing' component={Landing} /> */}
                <Route exact path='/Navbar' component={Navbar} />
            </Switch>
        </section>
    );
};

export default Routes;
