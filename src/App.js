import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFoundRoute from './components/NotFound'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={`/team-matches/:id`} component={TeamMatches} />
      <Route component={NotFoundRoute} />
    </Switch>
  </div>
)

export default App
