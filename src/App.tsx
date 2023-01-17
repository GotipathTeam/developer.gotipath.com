import { DevPortalProvider } from '@stoplight/elements-dev-portal';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { StreamAPI } from './components/API';
import { Navigation } from './components/Navigation';
import { NotFound } from './components/NotFound';


function App() {
    return (
        <DevPortalProvider>
            <BrowserRouter>
                <div className="app-container">
                    <header>
                        <Navigation />
                    </header>
                    <main className="main-content">
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/api/stream" />
                            </Route>
                            <Route path="/api/stream" component={StreamAPI} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        </DevPortalProvider>
    )
}



export default App;
