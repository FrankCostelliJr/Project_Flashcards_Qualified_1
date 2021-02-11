import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

function CardList( {cardList} ) {
  const { url } = useRouteMatch();

  return (
    <div>
        {cardList.map((card, index)=> {
        return (
          <div 
            key={index} 
            className='card' 
            style={{
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'center', 
              marginTop: '10px', 
              border: 'black solid 2px'
              }}>
            <div style={{
              flex: '1', 
              margin: '15px'
              }}>
              {card.front}
              <div style={{marginTop: '15px'}}>
                <Link 
                  to={`${url}/cards/${card.id}/edit`} 
                  className='btn btn-secondary' 
                  style={{marginRight: '8px'}}>
                    Edit
                </Link>
                <button 
                  className='btn btn-danger'>
                    Delete
                </button>
              </div>
            </div>
            <div style={{flex: '1', margin: '15px'}}>
              {card.back}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardList
