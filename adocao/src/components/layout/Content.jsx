import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import UseState from '../../views/contents/UseState'
import Home from '../../views/contents/Home'
import Sobre from '../../views/contents/Sobre'


const Content = props => (
    <main className="Content">
        <Switch>
          
                 <Route path="/Home">
                <Home />
            </Route>
                 <Route path="/Sobre">
                <Sobre />
            </Route>
            <Route path="/UseState">
                <UseState />
            </Route>
        </Switch>
    </main>
)
export default Content