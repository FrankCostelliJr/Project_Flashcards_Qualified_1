import { findAllByLabelText, findByLabelText } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Home({ deckList = [], setDeckList }) {

  return (
    <div>
      <Link to='/decks/new' className="btn btn-primary btn-lg" >+Add Deck</Link>
      {deckList.map((deck, index) => {
   
        return (
          <div key={index} className='card' style={{marginTop: '10px', border: 'solid 3px'}} >
            <div className='card-body'>
              <h3 className='card-title'>{deck.name}</h3>
              <p>{deck.description}</p>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                  <Link to={`/decks/${deck.id}`} className='btn   btn-secondary' style={{marginRight: '10px'}} >View</Link>
                  <Link to={`/decks/${deck.id}/study`}  className='btn btn-primary'>Study</Link>
                </div>
                <div>
                  <button className='btn btn-danger'>Delete</ button>
                </div>
              </div>
            </div>
          </div>  
        );
      })}
    </div>
  )
}

export default Home
