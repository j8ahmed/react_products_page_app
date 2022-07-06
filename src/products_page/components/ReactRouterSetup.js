import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProductPage from '../pages/ProductPage'
import ErrorPage from '../pages/ErrorPage'
import Header from './Header'

const ReactRouterSetup = () => {
    return (
        <Router>

            <Header />

            <Switch>
                <Route exact path="/" render={() => <Redirect to="/products-page/"/>}/>
                <Route exact path="/about" render={() => <Redirect to="/products-page/about"/>}/>
                <Route path="/product/:id" render={({match}) => <Redirect to={`/products-page/product/${match.params.id}`}/>}/>

                <Route exact path="/products-page/">
                    <HomePage/>
                </Route>

                <Route path="/products-page/about">
                    <AboutPage/>
                </Route>

                <Route path="/products-page/product/:id" children={
                    <ProductPage/>
                } />

                <Route path="*">
                    <ErrorPage/>
                </Route>

            </Switch>
        </Router>
    )
}

export default ReactRouterSetup
