import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { listCards } from '../../utils/api/index';
import { readDeck } from '../../utils/api/index';
import CardList from './CardList';
import BreadCrumb from './BreadCrumb';
import DeckOverview from './DeckOverview';


function ViewCards() {
  const [deck, setDeck] = useState({});
  const [cardList, setCardList] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const loadDeck = async () => {
      const thisDeck = await readDeck(deckId, abortController.signal);
      setDeck(() => thisDeck);
    }
    loadDeck();
    return () => abortController.abort();
  }, [deckId]);

  useEffect(() => {
    const abortController = new AbortController();
    const loadCards = async () => {
      const cards = await listCards(deckId, abortController.signal);
      setCardList(() => cards);
    }
    loadCards();
    return () => abortController.abort();
  }, [deckId]);
  
  return (
    <div>
      <h1>Cards</h1>
      <BreadCrumb deck={deck} />
      <DeckOverview deck={deck} />
      <CardList cardList={cardList} />
    </div>
  )
}

export default ViewCards
