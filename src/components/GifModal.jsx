import React, {useState} from 'react'
import styles from './GifModal.module.css'
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const gf = new GiphyFetch('HBrkJGvUZuQF1hWugaCwuIAwOIfPgJYu');

const GifModal = (props) => {

  const [searchInput, setSearchInput] = useState('');
  const fetchGifs = offset => gf.search(searchInput, { offset, limit: 10 });

  const addGif = (gif, e) => {
    props.setGifs(prevGifs => [...prevGifs, gif]);
  }

  const closeModal = () => {
    props.setGifModalState(false);
  }

  return (
    <div className={styles.modal}>
      <button 
        className={styles.closeBtn} 
        title='close' 
        role='button'
        onClick={
          e => closeModal()
        }
      >
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </button>
      <input type="text" placeholder='type words for gif' value={searchInput} onChange={e => setSearchInput(e.target.value)} autoFocus className={styles.search} />
      <div className={styles.result}>
        {
          searchInput === '' ? 
            (
              <Grid 
                key={searchInput}
                width={200} 
                columns={1} 
                fetchGifs={offset => gf.trending({offset, limit: 5})} 
                hideAttribution 
                noLink 
                noResultsMessage='No results found.' 
                onGifClick={addGif}
              />
            ) : (
              <Grid 
                key={searchInput} 
                width={200} 
                columns={1} 
                fetchGifs={fetchGifs} 
                hideAttribution 
                noLink 
                noResultsMessage='No results found.'
                onGifClick={addGif}
              />
            )
        }
      </div>
    </div>
  )
}

export default GifModal
