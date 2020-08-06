import React from 'react';

import ImageList from './imageList'
import SearchBar from './searchBar'

const data = ['all', 'the', 'things']

const App = () => {
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar />
      <ul>
        {data.map(el => {
          return ImageList(el)
        })}
      </ul>
    </div>
  );
}

export default App;