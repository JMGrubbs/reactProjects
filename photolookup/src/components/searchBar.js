import React from 'react'

class SearchBar extends React.Component {
  OnImputChange = (event) => { 
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <lable>Image Search</lable>
            <input id="searchbar" onChange={this.OnImputChange} type="text" />
          </div>
        </form>
      </div>
    )
  }
};

export default SearchBar;
