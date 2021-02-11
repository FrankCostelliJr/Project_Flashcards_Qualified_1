import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom';

function DeckOverview({deck = {}}) {
  const { url } = useRouteMatch();
  return (
    <div 
      className='card' 
      style={{border: 'outset 5px'}}>
      <div className="card-body">
        <h3 className="card-title">{deck.name}</h3>
        <p>{deck.description}</p>
        <div 
          style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Link to={`${url}/edit`} 
              className="btn btn-secondary" 
              style={{marginRight: '5px'}}>
                Edit
            </Link>
            <Link to={`${url}/study`} 
              className="btn btn-primary" 
              style={{marginRight: '5px'}}>
                Study
            </Link>
            <Link to={`${url}/cards/new`} 
              className="btn btn-primary">
                +Add Cards
            </Link>
          </div>
          <div>
            <button 
              className="btn btn-danger">
                Delete
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DeckOverview
