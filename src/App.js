import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Index from './pages/Homepage'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" component={Index}/>
                </Switch>
            </div>
        );
    }
}

export default App;
