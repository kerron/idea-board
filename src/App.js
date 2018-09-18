import React, { Component } from 'react';
import {
   BrowserRouter as Router, 
   HashRouter, 
   Switch, 
   Route,
} from 'react-router-dom';
import BodyContainer from './components/Body/BodyContainer';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';

class App extends Component {

  componentDidMount() {
    document.addEventListener('click', (e) => {
      let card = e.target.closest('.editable-note');
      if (card) {
        let els = card.getElementsByClassName('hidden');
        card.classList.add('note-open');

        for(let el of els) {
          el.style.display = 'block';
        }
      } else {
        //click is outside a card
        let notesOpen = e.target.getElementsByClassName('note-open');

        if (notesOpen.length) {
          for (let noteOpen of notesOpen) {
            let els = noteOpen.getElementsByClassName('hidden');

            for (let el of els) {
              el.style.display = 'none';
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <Router>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={BodyContainer}
            />
            <Route
              exact
              path="/work"
              component={BodyContainer}
            />
            <Route
              exact
              path="/person"
              component={BodyContainer}
            />
            <Route
              exact
              path="/rockets!"
              component={BodyContainer}
            />
            <Route
              exact
              path="/profile"
              component={ProfileContainer}
            />
          </Switch>
        </HashRouter>
      </Router>
    );
  }
}

export default App;
