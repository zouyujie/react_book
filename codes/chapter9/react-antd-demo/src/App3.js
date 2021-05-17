import React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Book from './views/Book.jsx';
import NetBook from './views/books/NetBook.jsx';
import VueBook from './views/books/VueBook.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Book>
          <Switch>
            <Route path="/book/net-book" component={NetBook}></Route>
            <Route path="/book/vue-book" component={VueBook}></Route>
          </Switch>
        </Book>
      </Router>
    </div>
  );
}

export default App;
