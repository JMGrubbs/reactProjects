import React, { useState } from 'react'

class SearchBar extends React.Component {
// const SearchBar = () => {
  // const [term, setTerm] = useState('');
  state = { term: '' };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              id="searchbar"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              onChange={(e) => console.log(this.state.term)}
              type="text" />
            {/* <input id="searchbar"
              onChange={(e) => setTerm(e.target.value)}
              onChange={(e) => console.log(e.target.value)}
              type="text" /> */}
          </div>
        </form>
      </div>
    )
  }
};

export default SearchBar;
