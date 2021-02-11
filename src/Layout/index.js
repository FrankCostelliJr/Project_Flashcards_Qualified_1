import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import { listDecks } from '../utils/api/index';
import Header from "./Header/Header";
import NotFound from "./NotFound/NotFound";
import Home from './Home/Home';
import Deck from './Deck/Deck';

function Layout() {

  const [deckList, setDeckList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const loadDecks = async () => {
      const decks = await listDecks(abortController.signal);
      setDeckList(() => decks);
    }
    loadDecks();
    return () => abortController.abort();
  }, [deckList]);


  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path='/'>
            <Home 
            deckList={deckList} 
            setDeckList={setDeckList}
            />
          </Route>
          <Route exact={true} path='/decks/new'>
            <h1>Add Deck</h1>
          </Route>
          <Route exact={true} path='/decks/:deckId'>
            <Deck deckList={deckList}/>
          </Route>
          <Route  path='/decks/:deckId/study'>
            <h1>Study</h1>
          </Route>
          <Route path='/decks/:deckId/edit'>
            <h1>Edit Deck</h1>
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <h1>Add Card</h1>
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <h1>Edit Card</h1>
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
