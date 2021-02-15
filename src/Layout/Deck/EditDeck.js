import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { readDeck, updateDeck } from '../../utils/api/index';

function EditDeck() {
  const initialState = {
    name: '',
    description: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [deck, setDeck] = useState({});
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const loadDeck = async () => {
      const loadedDeck = await readDeck(deckId, abortController.signal);
      setDeck(() => loadedDeck);
      setFormData({
        id: deckId,
        name: loadedDeck.name,
        description: loadedDeck.description
      });
    };
    loadDeck();
    return () => abortController.abort();
  }, [deckId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedDeck = await updateDeck(formData);
    history.push(`/decks/${updatedDeck.id}`);
  };

  return (
    <div>
      
    </div>
  )
}

export default EditDeck
