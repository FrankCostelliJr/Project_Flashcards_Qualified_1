import React, { useState} from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './Common/Header';
import NotFound from './Common/NotFound';
import Home from './Home/Home';
import CreateDeck from './Home/CreateDeck';
import Deck from './Deck/Deck';
import EditDeck from './Deck/EditDeck';
import Study from './Deck/Study';
import AddCard from './Cards/AddCard';
import EditCard from './Cards/EditCard';


function Layout() {

  const [numDecks, setNumDecks] = useState(0);

  const updateDecks = (value) => {
    setNumDecks(() => numDecks + value)
  }


  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path='/'>
            <Home numDecks={numDecks} updateDecks={updateDecks} />
          </Route>
          <Route path='/decks/:deckId/study'>
            <Study />
          </Route>
          <Route path='/decks/new'>
            <CreateDeck />
          </Route>
          <Route path='/decks/:deckId/edit'>
            <EditDeck />
          </Route> 
          <Route exact={true} path='/decks/:deckId'>
            <Deck updateDecks={updateDecks} />
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>

      </div>
    </>
  );
}

export default Layout;
