import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Join from './components/join/join.js';
import Chat from './components/chat/chat.js';
import Counter from './components/counter';
import Comment from './components/test';


// function component
const App = () => {

  return (

    <Router>

      <Route path='/' exact component={Join} />
      <Route path='/chat' component={Chat} />
      <Route path='/counter' component={Counter} />
      <Route path='/test' component={Comment} />
    </Router>
  )
};





export default App;