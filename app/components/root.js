import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import AllCandies from './AllCandies';
import SingleCandy from './SingleCandy';
import NotFound from './NotFound';

const Root = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit"><Link className="navlink" to="/">Home</Link></Button>
            <Button color="inherit"><Link className="navlink" to="/candies">Candies</Link></Button>
          </Toolbar>
        </AppBar>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/candies" component={AllCandies} />
          <Route exact path="/candies/:id(\d+)" component={SingleCandy} />
          {/* `(\d+)` in the above route is a regular expression to restrict the `id` param to only be numbers */}
          <Route component={NotFound} />
          {/* this route without a path will render the NotFound component if no other Route match was found in the list above */}
        </Switch>
      </div>
    </Router>
  )
}

export default Root;
