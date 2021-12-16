import React from "react";

function Search({search, onSearch, handleSearch}) {

  function handleChange(e){
   onSearch(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"  value={search} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
